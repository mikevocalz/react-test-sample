import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import Employee from "./Employee";

//UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from 'material-ui/Avatar';
import EmployeeView from './Employee'

const StaffDirectory = ({ match }) => {
  const workerData = [
    {
      id: 1,
      first: "Damien",
      last: "Adams",
      age: "45",
      location: "Brooklyn, NY",
      description: "COO",
      avatar_url: "https://goo.gl/2Lb8KH"
    },
    {
      id: 2,
      first: "Jennifer",
      last: "Anderson",
      age: "31",
      location: "North Plainfield, NJ",
      description: "Senior Software Engineer",
      avatar_url: "https://goo.gl/gddAg9"
    },
    {
      id: 3,
      first: "Harrison",
      last: "Wells",
      age: "47",
      location: "Manhattan, NY",
      description: "CEO",
      avatar_url: "https://goo.gl/8tQ167"
    },
    {
      id: 4,
      first: "Tamera",
      last: "Wilson",
      age: "28",
      location: "Bronx, NY",
      description: "Principle Software Engineer",
      avatar_url: "https://goo.gl/LnuPPo"
    },
    {
      id: 5,
      first: "Jose",
      last: "Rodriquez",
      age: "27 ",
      location: "Englewood, NJ",
      description: "JR Web Developer",
      avatar_url: "https://goo.gl/LBh2vR"
    }
  ];
  const employees = workerData.map(employee => {
    return (
      <MuiThemeProvider>
        <ListItem key={employee.id}>
          <Link to={`${match.url}/${employee.id}`}>
            <ListItem
              key={employee.id}
              dense
              button
              style={{
                paddingLeft: 30,
                borderRadius: 20,
                marginTop: 5,
                marginBottom: 5
              }}
            >
              <Avatar
                alt="Avatar Image"
                src={employee.avatar_url}
                style={{ height: 80, width: 80 }}
              />
              <ListItemText
                style={{ marginLeft: 40, fontSize: 20, fontWeight: "900" }}
                primary={`${employee.first} ${employee.last}`}
              />
            </ListItem>
          </Link>
        </ListItem>
      </MuiThemeProvider>
    );
  });

  return <Fragment>
      <div style={{ justifyContent: "space-between", display: "block" }}>
        <div style={{ float: "left", padding: "10px", width: "40%", backgroundColor: "#f2f2f2", marginLeft: "auto" }}>
          <h1>Staff Directory</h1>
          <List>{employees}</List>
        </div>
      </div>

      <Route path={`${match.url}/:id`} render={props => <EmployeeView data={workerData} {...props} />} />
      <Route exact path={match.url} render={() => <div style={{ textAlign: "center" }}>
            <h5>Click on an Employee to view Details</h5>
          </div>} />
    </Fragment>;
};

export default StaffDirectory;
