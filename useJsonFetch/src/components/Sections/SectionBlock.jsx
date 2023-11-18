import React from "react";

const SectionBlock = ({ className, children })=> {
 
  

  return (
    <React.Fragment>
      <div className={className + "-container"}>
        {React.Children.map(children, (child) => {
  
          return child;
        })}
      </div>
    </React.Fragment>
  );
};

export default SectionBlock;