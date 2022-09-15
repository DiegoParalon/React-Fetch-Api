import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      {users.map((user) => {
        return (
          <div>
            <h2>ID : {user.id}</h2>
            <h3>Name :{user.name}</h3>
            <h4> Username: {user.username}</h4>
            <h5>Email:{user.email}</h5>
            <h5> Street : {user.address.street}</h5>
            <h5>City : {user.address.city}</h5>
            <h5> Website : {user.website}</h5>
            <h5>Phone :{user.phone}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Users;
