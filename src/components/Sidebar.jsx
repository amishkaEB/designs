import {
  createContext,
  Children,
  React,
  useContext,
  useState,
  useEffect,
} from "react";
import whiteModeLogo from "../assets/LogoBlack.png";
import darkModeLogo from "../assets/LogoWhite.png";
import userImg from "../assets/User.png";
import { FaSignOutAlt } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { BsToggleOff } from "react-icons/bs";
import { MdViewHeadline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { BsToggleOn } from "react-icons/bs";

const SidebarContext = createContext();

export const toggleDarkMode = () => {
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains("dark")) {
    htmlElement.classList.remove("dark");
  } else {
    htmlElement.classList.add("dark");
  }
};

export default function Sidebar({ children }) {
  const darkMode = document.documentElement.classList.contains("dark");
  const [expanded, setExpanded] = useState(true);
  const [DarkMode, SetDarkMode] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <aside className="h-fit md:h-screen select-none font-inter ">
      {/*Lap*/}
      <nav className="h-full flex-col bg-white dark:bg-gray-900 border-r dark:border-gray-500 shadow-sm hidden md:flex">
        {/*Logo and toggle*/}
        <div className="p-4 pb-2 h-16 my-2 flex flex-none justify-between items-center">
          <img
            src={darkModeLogo}
            className={`overflow-hidden hidden dark:block transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
            alt="Timo.Earth"
            draggable="false"
          />
          <img
            src={whiteModeLogo}
            className={`overflow-hidden block dark:hidden transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
            alt="Timo.Earth"
            draggable="false"
          />
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="p-1.5 rounded-lg bg-grey-50 hover:bg-gray-100 dark:hover:bg-slate-600/70"
          >
            {expanded ? (
              <MdOutlineKeyboardDoubleArrowLeft size={20} />
            ) : (
              <MdOutlineKeyboardDoubleArrowRight size={20} />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/*Account*/}
        <div className="flex flex-none h-20 p-3 text-gray-700 dark:text-white">
          <div
            className="relative flex items-center hover:bg-gray-100 dark:hover:bg-slate-600/70 py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors"
            onClick={() => {
              toggleDarkMode();
            }}
          >
            <span
              className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
              }`}
            >
              Switch Mode
            </span>
            <BsToggleOff size={20} className="block dark:hidden" />
            <BsToggleOn size={20} className="hidden dark:block" />
          </div>
        </div>
        <div className="border-t flex flex-none h-16 p-3 hover:bg-gray-100 dark:hover:bg-slate-600/70">
          <div className="w-10 h-10 rounded-md bg-timoBlue text-white text-center justify-center place-content-center">
            AG
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-medium text-gray-700 dark:text-white">
                Amishka Gunasekaran
              </h4>
              <span className="text-xs text-gray-700 dark:text-white/70">
                Eminent Brands
              </span>
            </div>
            <FaSignOutAlt
              size={20}
              className="hover:text-red-800 text-gray-700 dark:text-white"
            />
          </div>
        </div>
      </nav>

      {/*Mobile*/}
      <nav
        className={`w-full flex flex-col dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          mobileToggle && expanded
            ? "h-screen overflow-y-auto"
            : "h-fit md:hidden"
        }`}
      >
        {/*Logo and toggle*/}
        <div className="p-4 my-2 flex flex-none justify-between items-center">
          <img
            src={darkModeLogo}
            className={`overflow-hidden hidden dark:block transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
            alt="Timo.Earth"
            draggable="false"
          />
          <img
            src={whiteModeLogo}
            className={`overflow-hidden block dark:hidden transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
            alt="Timo.Earth"
            draggable="false"
          />
          <button
            onClick={() => {
              setMobileToggle(!mobileToggle);
              setExpanded(true);
            }}
            className="p-1.5 rounded-lg bg-grey-50 hover:bg-gray-100 transition-colors duration-300"
          >
            {mobileToggle && expanded ? (
              <MdCancel size={20} />
            ) : (
              <MdViewHeadline size={20} />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul
            className={`px-3 flex-1 transition-all duration-300 ease-in-out bg-gray-200 dark:bg-gray-800 ${
              mobileToggle && expanded ? "h-fit opacity-1" : "hidden opacity-0"
            }`}
          >
            {children}
          </ul>
        </SidebarContext.Provider>

        {/*Account*/}
        <div
          className={`w-full flex-none p-3 transition-all duration-300 bg-gray-200  dark:bg-gray-800 text-gray-700 dark:text-white ${
            mobileToggle && expanded ? "block opacity-1" : "hidden opacity-0"
          }`}
        >
          <div
            className="relative flex justify-between items-center hover:bg-gray-100 py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors duration-300"
            onClick={() => {
              toggleDarkMode();
            }}
          >
            <span
              className={`overflow-hidden transition-all text-gray-700 dark:text-white ${
                expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
              }`}
            >
              Switch Mode
            </span>
            <BsToggleOff size={20} className="block dark:hidden" />
            <BsToggleOn size={20} className="hidden dark:block" />
          </div>
        </div>
        <div
          className={`w-full justify-between content-center border-t flex flex-none h-16 p-3 hover:bg-gray-100 transition-all duration-300  bg-gray-400 dark:bg-gray-900 ${
            mobileToggle && expanded ? "block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="w-10 h-10 rounded-md bg-timoBlue text-white text-center justify-center place-content-center">
              AG
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
                expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-medium text-gray-700 dark:text-white">
                  Amishka Gunasekaran
                </h4>
                <span className="text-xs text-gray-700 dark:text-white/70">
                  Eminent Brands
                </span>
              </div>
            </div>
          </div>
          <FaSignOutAlt
            size={20}
            className="hover:text-red-800 place-self-center content-center text-gray-800 dark:text-white"
          />
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItems({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-timoBlue/10 to to-timoBlue/30 text-timoBlue dark:from-timoBlue/90 dark:to-timoBlue/50 dark:text-white"
          : "hover:bg-timoBlue/10 dark:hover:bg-timoBlue/50 text-gray-700 dark:text-gray-300"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-timoBlue ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-100 dark:bg-gray-900/20 dark:text-white text-timoBlue text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export function SidebarSubItems({ icon, text, active, alert, children }) {
  const { expanded, setExpanded } = useContext(SidebarContext);

  const [subExpanded, setSubExpanded] = useState(false);

  return (
    <li
      className={`flex flex-col`}
      onClick={() => {
        setSubExpanded(!subExpanded);
      }}
    >
      {" "}
      <div
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-timoBlue/10 to to-timoBlue/30 text-timoBlue dark:from-timoBlue/90 dark:to-timoBlue/50 dark:text-white"
            : "hover:bg-timoBlue/10 dark:hover:bg-timoBlue/50 text-gray-700 dark:text-gray-300"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3 opacity-1" : "w-0 opacity-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-timoBlue ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-gray-100 dark:bg-gray-900/20 dark:text-white text-timoBlue text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </div>
      <SidebarContext.Provider value={{ expanded, subExpanded }}>
        <ul
          className={`transition-all duration-150 ease-in-out ${
            subExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
          style={{ transitionProperty: "max-height" }}
        >
          {children}
        </ul>
      </SidebarContext.Provider>
    </li>
  );
}

export function SidebarSetSubItems({ icon, text, active, alert }) {
  const { expanded, subExpanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center bg-gray-50 dark:bg-gray-50/10 h-10 py-2 px-3 my-0.5 font-medium rounded-md cursor-pointer group ${
        active
          ? "bg-gradient-to-tr from-timoBlue/0 to to-timoBlue/30 text-timoBlue "
          : "hover:bg-timoBlue/10 dark:hover:bg-timoBlue/50 text-gray-700 dark:text-gray-300"
      }
          ${
            subExpanded
              ? "visible transition-all duration-150 ease-in-out"
              : "invisible transition-all duration-150 ease-in-out"
          }`}
    >
      {icon}
      <span
        className={`transition-all ${
          expanded ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-timoBlue ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full top-1/2 transform -translate-y-1/2 rounded-md px-2 py-1 ml-6
      bg-gray-100 text-timoBlue dark:bg-gray-900/20 dark:text-white text-sm invisible opacity-0 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
