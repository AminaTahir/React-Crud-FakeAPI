import React, { useEffect, useState } from "react";
import userService from "../services/userService";

export default function Users() {
  const [users, setusers] = useState([]);
  const [selectedusers, setselectedusers] = useState();

  useEffect(() => {
    retriveusers();
  }, []);

  const retriveusers = async () => {
    const response = await userService.getAll();
    console.log("Resp is: ", response);
    setusers(response.data);
  };

  const removeAll = async (id) => {
    const updatedusers = users.filter((users) => users.id !== id);
    console.log("updatedusers", updatedusers);
    setusers(updatedusers);
   
    const response = await userService.remove(id);

    console.log("delete res:", response);
  };

 

  return (
    <div className="list row">
      
      <div className="col-md-6">
        <h4>Users List</h4>

        <ul className="list-group">
       

          {users?.map((user) => (
            <>
              <li
                key={user.id}
                onClick={() => setselectedusers(user)}
                className={"list-group-item "}
              >
                {user.name}
              </li>
              {/*<li
                key={props.users.id}
                onClick={() => setselectedusers(props.users)}
                className={"list-group-item "}
              >
                {props.users.name}
              </li>*/}
            </>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        {selectedusers ? (
          <div>
            <h4>users</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {selectedusers.name}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {selectedusers.email}
            </div>
            <div>
              <label>
                <strong>Id:</strong>
              </label>{" "}
              {selectedusers.id}
            </div>
            <div>
              <label>
                <strong>Address:</strong>
              </label>{" "}
              {selectedusers.address.city}
            </div>
            <div>
              <label>
                <strong>Completed:</strong>
              </label>{" "}
              {selectedusers.completed ? "Published" : "Pending"}
            </div>
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={() => {removeAll(selectedusers.id);
                               setselectedusers(null)}}
            >
              Delete
            </button>
            <button
              className="m-3 btn btn-sm btn-danger"
             /* onClick={() => update(selectedusers.id)}*/
            >
              update
            </button>
      
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </div>
  );
}
