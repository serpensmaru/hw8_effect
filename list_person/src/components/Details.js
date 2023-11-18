import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import getURL from "./data"

export default function Details({ id }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${getURL()}${id}.json`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setUser(json);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          <li className="list-group-item">
            <img src={user.avatar} />
          </li>
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">City: {user.details.city}</li>
          <li className="list-group-item">Company: {user.details.company}</li>
          <li className="list-group-item">Position: {user.details.position}</li>
        </ul>
      )}
    </React.Fragment>
  );
}

Details.propTypes = {
  id: PropTypes.number,
};
