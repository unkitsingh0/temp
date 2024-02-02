import React from "react";
import "./sideBar.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CategoryIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
function SideBar() {
  return (
    <div className="sideBarComponent">
      <ul className="pageList">
        <li className="selectedPage">
          <span>
            <HomeIcon />
            Home
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>

        <li>
          <span>
            <CategoryIcon></CategoryIcon>
            Category
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>
        <li>
          <span>
            <Inventory2OutlinedIcon></Inventory2OutlinedIcon>
            Products
          </span>
          <ArrowRightIcon className="arrowIcon" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
