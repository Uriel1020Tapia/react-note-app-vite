
import React, { useState } from "react";
import "./Sidebar.css";
import plusIcon from "../../assets/plus.png";

const Sidebar = (props) => {
    const colors = ["#c792ea","#fe9b72", "#3f51b5", " #80cbc4", "#e91e63", "#f77669","#9ccc65","#ffcb68","#9c27b0","#673ab7"];

    const [listOpen, setListOpen] = useState(false);
  
    return (
      <div className="sidebar">
        <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
          {colors.map((item, index) => (
            <li
              key={index}
              className="sidebar_list_item"
              style={{ backgroundColor: item }}
              onClick={() => props.addNote(item)}
            />
          ))}
        </ul>
      </div>
    );
}

export default Sidebar
