import React, { useState } from "react";
import "./adduser.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUser({ ...user, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        console.log("Nouvel utilisateur créeé!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to="/" type="button" className="btn btn-secondary">
        <IoIosArrowBack />
      </Link>
      <h3>Ajouter un nouveau utilisateur</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Nom et prénom"
          />
          <label htmlFor="email">Courriel:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Entrez votre courriel"
          />
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Entrez votre adresse"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Ajouter l'utilisateur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
