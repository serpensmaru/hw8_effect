import React from "react";
import Spinner from "./Molecules/Spinner";
import useJsonFetch from "../hooks/useJsonFetch"
import usid from "usid";


const Loading = (props) => {
    const {url} = props;
    const {loading} = useJsonFetch(url,{});
    return (<React.Fragment>
        <div className="loading-block block">
            <span className="loading-text text">Loading...</span>
        {loading && <Spinner key={usid.rand()}/> }
        </div>
    </React.Fragment>)
}
export default Loading;