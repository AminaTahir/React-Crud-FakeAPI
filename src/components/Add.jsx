import React, { useState } from "react";
import userService from "../services/userService";
// import user from "../components/user";
const Add = () => {
  const initialuserState = {
    id: null,
    name: "",
    email: "",
    address: "",
    published: false
  };
  const [user, setuser] = useState(initialuserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  const saveuser = () => {
    var data = {
      name: user.name,
      email: user.email,
      address:user.address
    };

    userService.create(data)
      .then(response => {
        setuser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          address:response.data.address,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      
      })
      .catch(e => {
        console.log(e);
      });

      
  };

  const newuser = () => {
    setuser(initialuserState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newuser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              required
              value={user.address}
              onChange={handleInputChange}
              name="address"
            />
          </div>

          <button onClick={saveuser} className="btn btn-success">
            Submit
          </button>
          {/*<user users={user}/>*/}
        </div>
      )}
    </div>
  );
};

export default Add;