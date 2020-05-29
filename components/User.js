import React from "react";
import Router from 'next/router'
export default function User({ users }) {
  return users.map((user) => (
    <ul className="list-group" key={user.id}>
      <li 
         className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        onClick={()=>Router.push('/users/[id]', `/users/${user.id}`)}
      >
        <div>
        <p>{user.first_name} - {user.last_name}</p>
         <p>{user.email}</p>
        </div>
        <img src={user.avatar} alt="" className="img-fluid" style={{borderRadius:'50%'}} />
      </li>
    </ul>
  ));
}
