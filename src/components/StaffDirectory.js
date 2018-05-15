import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";

//UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from 'material-ui/Avatar';
import EmployeeView from './Employee'

const StaffDirectory = ({ match }) => {
  const workerData = require("../api/data.json");
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
