import React from "react";
import discordLogo from "../assets/DiscordLogo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then(() => navigate("/channels"))
    .catch((error)=>alert(error.message))
  };

  return (
    <nav className="flex items-center px-10 justify-between h-20  bg-[#295DE7]">
      <a href="/">
        <img src={discordLogo} alt="" className="w-32 h-12 object-contain" />
      </a>
      <div className="hidden lg:flex space-x-6">
        <a className="link ">Download</a>
        <a className="link">Nitro</a>
        <a className="link">Discover</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
        <a className="link">Big</a>
        <a className="link">Carrers</a>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm
         px-4 hover:shadow-2xl hover:text-[#7289da] transition duration-200 ease-in-out whitespace-nowrap font-medium"
          onClick={!user ? signIn : () => navigate("/channels")}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <Bars3Icon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </nav>
  );
}

export default Nav;
