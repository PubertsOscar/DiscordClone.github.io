import React from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import DiscordChill from "../assets/DiscordChill.svg";
import DiscordCloud from "../assets/DiscordCloud.svg";
import DiscordFish from "../assets/DiscordFish.svg";
import StudyGroup from "../assets/StudyGroup.svg";
import VoiceConected from "../assets/VoiceConnected.svg";
import Coach from "../assets/Coach.svg";
import Chillin from "../assets/Chillin.svg";
import Sparkles from "../assets/Sparkles.svg";
import Section from "./Section";

function Landing() {
  return (
    <>
      <section className="bg-[#295DE7] relative max-w-full max-h-full  ">
        <div className=" h-screen flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center justify-center mb-20">
            <h1 className="text-[56px] text-white font-bold mb-14">
              IMAGINE A PLACE...{" "}
            </h1>
            <h2 className="text-white text-center text-lg font-light tracking-wide lg:max-w-3xl w-full">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </h2>

            <div className="flex flex-col mt-8 sm:flex-row md:flex-col lg:flex-row lg:items-center lg:justify-center  md:items-start sm:items-center gap-6 max-w-full max-h-full">
              <button className="bg-white w-72 font-medium flex items-center justify-center text-[20px] rounded-full p-4 text-lg hover:shadow-2xl hover:text-[#7289da] transition duration-200 ease-in-out z-10">
                <ArrowDownIcon className="w-6 mr-2" />
                Download for Windows
              </button>
              <button className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-200 ease-in-out z-10">
                Open Discord in your browser
              </button>
              <img
                src={DiscordCloud}
                alt=""
                className="absolute bottom-0 -left-80 max-w-full max-h-full "
              />
              <img
                src={DiscordChill}
                alt=""
                className="absolute bottom-0 -left-80 "
              />
              <img
                src={DiscordFish}
                alt=""
                className="absolute bottom-0 -right-80 "
              />
            </div>
          </div>
        </div>
      </section>
      <Section
        img={StudyGroup}
        title="Create an invite-only place where you belong"
        paragraph=" Discord servers are organized into topic-based channels where you
      can collaborate, share, and just talk about your day without
      clogging up a group chat."
      />
      <Section
        img={VoiceConected}
        title="Where hanging out is easy"
        paragraph="Grab a seat in a voice channel when you’re free. Friends in your
        server can see you’re around and instantly pop in to talk without
        having to call."
      />
      <Section
        img={Coach}
        title="From few to a fandom"
        paragraph="Get any community running with moderation tools and custom member
        access. Give members special powers, set up private channels, and
        more."
      />
      <Section
        img={Chillin}
        title=" RELIABLE TECH FOR STAYING CLOSE"
        paragraph=" Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share."
      />

      <div className="flex flex-col items-center justify-center mb-32 mx-10 relative">
        <img src={Sparkles} alt="" className="absolute top-0" />
        <h4 className="text-3xl font-bold mt-8">
          Ready to start your journey?
        </h4>
        <button className="bg-[#5865f2] text-white w-72 mt-10 font-medium flex items-center justify-center text-[20px] rounded-full p-4 text-lg hover:shadow-2xl hover:text-[#7289da] transition duration-200 ease-in-out">
          <ArrowDownIcon className="w-6 mr-2" />
          Download for Windows
        </button>
      </div>
    </>
  );
}

export default Landing;
