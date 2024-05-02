import React from "react";

const User = () => {
  return (
    <div className="userTable">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Nom</th>
            <th scope="col">Courriel</th>
            <th scope="col">Adresse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>john@gmail.com</td>
            <td>Québec, Canada</td>
            <td>Update | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
