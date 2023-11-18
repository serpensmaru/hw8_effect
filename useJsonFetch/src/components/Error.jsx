import React from "react";

import useJsonFetch from "../hooks/useJsonFetch";


const Error = (props) => {
  const { url } = props;
  const  {error}  = useJsonFetch(url, {});

  return (
    <React.Fragment>
      {error && (
        <div className="error-block block">
          <span className="error-text text">{error}</span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Error;
