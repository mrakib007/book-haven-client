import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SideBar.css'
const Sidebar = () => {
    return (
     <div className="sidebar">
            <h3 className='text-white mx-2 mt-2'>Sidebar</h3>
    <Nav className="ms-auto margin">
      <Link to="/manageBook" className="mx-2 text-white">Manage Book</Link>
      <br/>
      <Link to="/addBook" className="mx-2 text-white">Add Book</Link>
      <br/>
      <Link to="/editBook" className="mx-2 text-white">Edit Book</Link>
    </Nav>
        </div>
    );
};

export default Sidebar;