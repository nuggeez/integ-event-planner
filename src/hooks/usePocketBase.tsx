/* eslint-disable @typescript-eslint/no-explicit-any */
import pb from "../utils/pocketbase";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AuthRecord } from "pocketbase";

type usePocketBaseStore = {
  user: AuthRecord;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    name: any,
    phoneNumber: any,
    email: any,
    password: any,
    type: any,
  ) => Promise<boolean>;
  errorMsg: any;
  setErrorMsg: (msg: string) => void;
};

const usePocketBase = create<usePocketBaseStore>()(
  immer((set, get) => {
    pb.authStore.onChange(() => {
      pb.authStore.exportToCookie({ httpOnly: true });
      localStorage.setItem(
        "pb_auth",
        JSON.stringify({
          record: pb.authStore.record,
          token: pb.authStore.token,
        }),
      );

      set({
        user: pb.authStore.record,
        isAuthenticated: pb.authStore.isValid,
      });
    });

    return {
      user: pb.authStore.record,
      isAuthenticated: pb.authStore.isValid,
      login: async (email: string, password: string) => {
        try {
          const { record } = await pb
            .collection("users")
            .authWithPassword(email, password);

          set((state) => {
            state.user = record;
            state.isAuthenticated = true;
          });

          return true;
        } catch (err) {
          set((state) => {
            state.errorMsg = err.message || "Error.";
          });
          return err;
        }
      },
      logout: () => {
        pb.authStore.clear();
        set((state) => {
          state.user = null;
          state.isAuthenticated = false;
        });
      },
      register: async (name, phoneNumber, email, password, type) => {
        try {
          const record = await pb.collection("users").create({
            name,
            phone_number: phoneNumber,
            email,
            password,
            passwordConfirm: password,
            account_type: type,
          });

          await pb.collection("users").authWithPassword(email, password);
          await pb.collection("users").authRefresh();

          set((state) => {
            state.user = record;
          });

          return true;
        } catch (err) {
          set((state) => {
            state.errorMsg = err.message || "Error.";
          });
          throw err;
        }
      },
      errorMsg: "",
      setErrorMsg: (msg: string) =>
        set((state) => {
          state.errorMsg = msg;
        }),
    };
  }),
);

export default usePocketBase;
