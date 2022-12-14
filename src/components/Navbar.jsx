import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { RiNotification4Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar2.jpg";
import { Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />{" "}
      {icon}{" "}
    </button>{" "}
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const greetings = () => {};

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative w-100">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />{" "}
      <div className="flex ">
        <a
          href="http://new-lablib.herokuapp.com"
          className="flex items-center rounded-full text-[#03c9d7] p-3 hover:bg-light-gray"
        >
          <BiExit />
          <span className="ml-1"> Exit Admin Panel</span>{" "}
        </a>{" "}
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification4Line />}
        />{" "}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-10 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p className="hidden md:block">
              <span className="text-gray-400 text-14"> Bonjour, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Ichane{" "}
              </span>{" "}
            </p>{" "}
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>{" "}
        </TooltipComponent>
        {isClicked.notification && <Notification />}{" "}
        {isClicked.userProfile && <UserProfile />}{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
