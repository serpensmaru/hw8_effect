import React from "react";

import useJsonFetch from "../hooks/useJsonFetch";

const Success = (props) => {
  const { url } = props;
  const { data } = useJsonFetch(url, {});

  return (
    <React.Fragment>
      {data && (
        <div className="success-block block">
          <span className="success-text text">{data.status}</span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Success;
