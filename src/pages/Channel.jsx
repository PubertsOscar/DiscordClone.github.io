import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { redirect } from "react-router-dom";
import ServerIcon from "../components/ServerIcon";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";

function Channel() {
            
  const [user] = useAuthState(auth);

  async function addChannel() {
    const channelName = prompt("Enter a new channel");
    const channel = {
      channelName: channelName,
    };
    await addDoc(collection(db, "channels"), channel);
  }

  return (
    <>
      {!user && redirect("/")}
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-4 min-w-max">
          <div className="server-default hover:bg-[#5865f2] group">
            <img src="https://rb.gy/kuaslg" alt="" className="h-5" />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />

          <div className="server-default hover:bg-[#3ba55c] group">
            <PlusIcon className="text-[#3ba55c] h-7 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            Official PAPA Server... <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-default ">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3  mr-2" />
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={addChannel}
              />
            </div>
            <div className="flex- flex-col space-y-2 px-2 mb-4">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Channel;
