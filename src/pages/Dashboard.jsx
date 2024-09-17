import React from "react";
import Sidebar, {
  SidebarItems,
  SidebarSetSubItems,
  SidebarSubItems,
} from "../components/Sidebar";
import { MdDashboard } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
import { RiFileEditFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserPen } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row dark:bg-zinc-700 transition-colors duration-500 ease-in-out">
      <Sidebar>
        <SidebarItems
          icon={<MdDashboard size={20} />}
          text={"Dashboard"}
          active
        />
        <SidebarSubItems icon={<BsBoxFill size={20} />} text={"Products"}>
          <SidebarSetSubItems
            icon={<IoBagAdd size={20} />}
            text={"Add Product"}
          />
          <SidebarSetSubItems
            icon={<RiFileEditFill size={20} />}
            text={"Manage Product"}
          />
        </SidebarSubItems>
        <SidebarSubItems icon={<FaUser size={20} />} text={"Users"}>
          <SidebarSetSubItems
            icon={<FaUserPlus size={20} />}
            text={"Add User"}
          />
          <SidebarSetSubItems
            icon={<FaUserPen size={20} />}
            text={"Manage User"}
          />
        </SidebarSubItems>
        <SidebarItems icon={<GoHomeFill size={20} />} text={"Company"} />
      </Sidebar>

      <div className="p-6 relative text-zinc-800 text-3xl font-bold font-inter dark:text-gray-100">
        Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
