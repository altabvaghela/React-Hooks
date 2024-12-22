import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => setData(res.data)) 
      .catch((err) => console.error("Error fetching data:", err)); // Log error if any
  }, []); 

  return (
    <div>
      <h2>User Data</h2>
      <table border="1" style={{ width: "50%", margin: "auto", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Api;
