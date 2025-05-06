import { useLayoutEffect, useState } from "react";
import Header from "../../components/Header";
import usePocketBase from "../../hooks/usePocketBase";
import pb from "../../utils/pocketbase";
import dayjs from "dayjs";

export default function AttendeeProfilePage() {
  const { user } = usePocketBase();

  useLayoutEffect(() => {
    const handleRefresh = async () => {
      await pb.collection("users").authRefresh();
    };

    return () => handleRefresh();
  }, []);

  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    <>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-gray-400">Username</p>
          <h1 className="text-2xl font-bold text-gray-700">{user.name}</h1>
        </div>
        <div>
          <p className="text-gray-400">Email</p>
          <h1 className="text-2xl font-bold text-gray-700">{user.email}</h1>
        </div>
        <div>
          <p className="text-gray-400">Phone Number</p>
          <h1 className="text-2xl font-bold text-gray-700">
            {user.phone_number}
          </h1>
        </div>
        <div>
          <p className="text-gray-400">Account Type</p>
          <h1 className="text-2xl font-bold text-gray-700">
            {user.account_type}
          </h1>
        </div>
        <div>
          <p className="text-gray-400">Created Date</p>
          <h1 className="text-2xl font-bold text-gray-700">
            {dayjs(user.created).format("MMMM DD, YYYY").toString()}
          </h1>
        </div>
      </div>
    </>,
    <>
    
    </>
  ];

  return (
    <div className="flex flex-col bg-gray-100">
      <Header link_left={"Profile"} link_right={"My profile"} />
      {user && (
        <div className="m-8 flex flex-col gap-4 rounded-2xl bg-white p-8">
          <div className="flex flex-row gap-4">
            <div className="aspect-square w-full max-w-[160px] rounded-full border border-gray-200 bg-gray-300" />
            <div className="flex flex-col py-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-xl text-gray-400">{user.account_type}</p>
              <div className="divider divider-horizontal w-full py-4" />
            </div>
          </div>
          <div role="tablist" className="tabs tabs-lift">
            <a
              role="tab"
              className={tabIndex == 0 ? "tab tab-active" : "tab"}
              onClick={() => {
                setTabIndex(0);
              }}
            >
              Profile Details
            </a>
            <a
              role="tab"
              className={tabIndex == 1 ? "tab tab-active" : "tab"}
              onClick={() => {
                setTabIndex(1);
              }}
            >
              Edit Profile
            </a>
            <a
              role="tab"
              className={tabIndex == 2 ? "tab tab-active" : "tab"}
              onClick={() => {
                setTabIndex(2);
              }}
            >
              Account Settings
            </a>
          </div>
          <div className="flex flex-col gap-4"></div>
        </div>
      )}
    </div>
  );
}
