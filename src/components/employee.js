import React from "react";

//UI
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";

const EmployeeView = ({ match, data }) => {
  const employee = data.find(employee => employee.id === Number(match.params.id));
  let workerData;

  if (employee)
    workerData = (
      <MuiThemeProvider>
        <Paper elevation={4}>
          <hr />
          <h1>{`${employee.first} ${employee.last}`}</h1>
          <img
            style={{ height: "400px" }}
            alt="my avatar"
            src={employee.avatar_url}
          />
          <h5>Company Title: {employee.description}</h5>
          <hr />
          <h4>Age: {employee.age}</h4>
          <h4>Location: {employee.location}</h4>
          <hr />
        </Paper>
      </MuiThemeProvider>
    );
  else workerData = <h2>Employee not found...</h2>;

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "70%",
          margin: "auto"
        }}
      >
        {workerData}
      </div>
    </div>
  );
};

export default EmployeeView;
