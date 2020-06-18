import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import VinylWhite from "../../assets/png/VinylWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComments,
  faHeart,
  faUserCircle,
  faPowerOff,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { logoutApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import PostModal from "../Modal/PostModal";

import "./SuperiorMenu.scss";

export default function SuperiorMenu(props) {
  const { setRefreshCheckLogin } = props;
  const user = useAuth();
  const [showModal, setShowModal] = useState(false);

  const logout = () => {
    logoutApi();
    setRefreshCheckLogin(true);
  };

  return (
    <div className="superior-menu">
      <img className="logo" src={VinylWhite} alt="vinyl" />
      <Link to="/">
        {" "}
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </Link>
      <Link to="/follows">
        <FontAwesomeIcon icon={faHeart} /> Follows
      </Link>
      <Link to="/chats">
        <FontAwesomeIcon icon={faComments} /> Chats
      </Link>
      <Link to="" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> Logout
      </Link>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <PostModal show={showModal} setShow={setShowModal} />
    </div>
  );
}
