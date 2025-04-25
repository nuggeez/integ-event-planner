import pb from "../utils/pocketbase";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { AuthRecord } from "pocketbase";

type usePocketBaseStore = {
  user: AuthRecord;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const usePocketBase = create<usePocketBaseStore>()(
  immer((set, get) => {
    pb.authStore.onChange(() => {
      pb.authStore.exportToCookie({ httpOnly: true });

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
        } catch (err) {
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
    };
  }),
);

export default usePocketBase;
