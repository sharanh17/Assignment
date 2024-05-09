import React, { useState } from "react";
import './Dashboard.css'
import { FaHome } from 'react-icons/fa';


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateAssignment = () => {
    // Handle assignment creation logic here
    console.log("Assignment created!");
    handleCloseModal();
  };

  return (
    <div className="dashboard-container">
    <h3>
    Hi,AltWorld
    </h3>
    <h4><FaHome size={20} color='rgb(115, 235, 220)'/>   Dashboard</h4>
      <div
        className="box"
        style={{
          width: "200px",
          height: "180px",
          backgroundColor: 'rgb(115, 235, 220)' ,
         
          justifyContent: "center",
          alignItems: "center",
          borderRadius:"10px"
        }}
      > 
      <button className="butt">+</button>
      <div className="content">
        <h6>New  Assignment?</h6>
        <h5>Select from pre-defined questions</h5>
        <h5>to have a quick turnaround</h5>
        </div>
        <button className="button" onClick={handleOpenModal}>Create Assignment</button>
      </div>

    </div>
  );
};

export default Dashboard;
