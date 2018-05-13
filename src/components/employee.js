import React, { Component, Image } from 'react';

import data from '../api/data'

export default class Employee extends Component {
state = {

};

 

 


  render() {
   
      return data.map((item) => {
          return <div key={item.id}>
              <div>
                  <Image src={item.avatar_url} />
              </div>
              <div>First Name: {item.first} </div>
              <div>Last Name: {item.last} </div>
              <div>Age: {item.age} </div>
              <div>Location: {item.location} </div>
              <div>Description: {item.description} </div>
          </div>;
      }
    )
  }
}
