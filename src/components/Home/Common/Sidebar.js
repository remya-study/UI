
import React, { useEffect } from 'react';
import './Sidebar.css';
import ScrollToTop from "../../ScrollToTop";
import Home from './Home';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    useEffect(() => {
        // Add event listeners to handle dropdown behavior
        const navItem = document.querySelector('.nav-item.dropdown');
        navItem.addEventListener('mouseover', handleMouseOver);
        navItem.addEventListener('mouseout', handleMouseOut);
    
        return () => {
          // Clean up event listeners
          navItem.removeEventListener('mouseover', handleMouseOver);
          navItem.removeEventListener('mouseout', handleMouseOut);
        };
      }, []);
    
      const handleMouseOver = () => {
        document.querySelector('.dropdown-menu').classList.add('show');
      };
    
      const handleMouseOut = () => {
        document.querySelector('.dropdown-menu').classList.remove('show');
      };



  return (
<section>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
    <ScrollToTop/>
   
    <div className="sidebar" id="scroll">
      <ul className="nav flex-column">
        
       
        
        


      


        <li className="nav-item">
          <a className="nav-link active" href="#Userhome"><i class="fa fa-fw fa-home"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Dashboardmain">Dashboard</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="Userprofile"><i class="fa fa-fw fa-user"></i>Profile</a>
          
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Settings
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        

            <Link to="/Home" className="dropdown-item">Logout</Link>
            
          </div>
        </li>



      </ul>
    </div>
    </section>
  );
}

export default Sidebar;
