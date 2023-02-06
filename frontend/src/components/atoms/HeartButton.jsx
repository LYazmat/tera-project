import React, { useState, useContext } from "react";
import Heart from "react-heart";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

import { useAxios } from "../../utils/useAxios";

export default function HeartButton({ id, course, handleDisplay }) {
  const [active, setActive] = useState(!!id);
  const [favorite, setFavorite] = useState(id);

  // For prevent double click purpose
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const api = useAxios(true);

  const toogleFavorite = async () => {
    // If user context not found => navigate to login page and don't call the API
    if (!user) {
      navigate("/login");
      return;
    }

    // Do not call API if a request is still on going
    if (loading) return;

    setLoading(true);

    /**
     * Post request needs course and user ids, returns status 201 - created
     * Delete request needs favorite id, returns status 204 - no content
     **/

    if (active) {
      await api
        .delete(`/course/favorite/${favorite}/`)
        .then(function (response) {
          if (response.status === 204) {
            setFavorite(null);
            setActive(!active);
            handleDisplay();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      await api
        .post("/course/favorite/", {
          user: user.user_id,
          course: course,
        })
        .then(function (response) {
          if (response.status === 201) {
            setFavorite(response.data.id);
            setActive(!active);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        width: "1.5rem",
        position: "absolute",
        right: "5%",
        bottom: "5%",
      }}
    >
      <Heart
        isActive={active}
        onClick={toogleFavorite}
        style={{
          fill: active ? "red" : "white",
          stroke: active ? "red" : "white",
          filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 1))",
        }}
      />
    </div>
  );
}
