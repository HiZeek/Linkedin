import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1645219944456-038cde00ae20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar-avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        <h4>Frontend Developer - ReactJS || WordPress</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed your profile</p>
          <p className="sidebar-statNumber">54</p>
        </div>
        <div className="sidebar-stat">
          <p>Views of your post</p>
          <p className="sidebar-statNumber">115</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("jobseekers")}
        {recentItem("jobsearch")}
        {recentItem("jobs")}
        {recentItem("human resources")}
      </div>
    </div>
  );
};

export default Sidebar;
