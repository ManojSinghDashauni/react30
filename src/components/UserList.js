import React from "react";

function UserList({ item }) {
  return (
    <div className="bg-green-200 m-4 sm:w-1/2">
      <h5 className="text-center">User: {item.login.username}</h5>
      <section className="flex justify-between">
      <div>
        <h4>{item.name.title} {item.name.first} {item.name.last}</h4>
        <p>Email: {item.email}</p>
        <h5>User for {item.registered.age}{" "}{item.registered.age === 1 ? "year" : " years"}</h5>
        <p>Age: {item.dob.age}</p>
        <p>Nationality: {item.nat}</p>
        <p>Phone : {item.phone}</p>
      </div>
      <div>
        <img src={item.picture.medium}></img>
        <h6>Address:</h6>
        <p>{item.location.street.number} {item.location.street.name},</p>
        <p>{item.location.state}, {item.location.country},</p>
        <p>{item.location.postcode}</p>
      </div>
      </section>
    </div>
  );
}
export default UserList;
