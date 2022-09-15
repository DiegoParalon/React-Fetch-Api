import React from "react";

import Header from "../partials/Header";
import Nav from "../partials/Nav";

const Template = ({ children, pages, onChangePage, activePages }) => {
const title = pages[activePages.text]

  return (
    <>
      <Header title={title} />
      <Nav pages={pages} onChangePage={onChangePage} />
      {children}
      
    </>
  );
};

export default Template;
