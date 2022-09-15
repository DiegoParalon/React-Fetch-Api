import React from "react";

const Loading = ({ visible }) => {
  return (
    visible === true ? "Carregando .... " : ""
  ) 
}

export default Loading
