import React from "react";
import ProductControl from "../ProductControl/ProductControl";
import Sidebar from "../SideBar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ManageBook from "../ManageBook/ManageBook";
import AddBook from "../AddBook/AddBook";
import EditBook from "../EditBook/EditBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Admin = () => {
  return (
    <Router>
      <div className="row">
        <div className="sidebar">
          <div className="col-md-3">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route path="/manageBook">
              <ManageBook></ManageBook>
            </Route>
            <Route path="/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/editBook">
              <EditBook></EditBook>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Admin;
