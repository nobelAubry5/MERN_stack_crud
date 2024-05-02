import React, { useEffect, useState } from "react";
import "./update.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
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
      <h3>Mise à jour de l'utilisateur</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Nom et prénom"
          />
          <label htmlFor="email">Courriel:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            autoComplete="off"
            placeholder="Entrez votre courriel"
          />
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={user.address}
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

export default UpdateUser;
