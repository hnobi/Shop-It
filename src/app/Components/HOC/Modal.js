import React, { Component, Fragment } from "react";
import "./../../asset/scss/modal.scss";

const Modal = props => {
  const { cancelBtn, children, header } = props;
  return (
    <Fragment>
      <div className="modal">
        <div className="modal__content">
          <p className="modal-cancel" onClick={cancelBtn}>
            ✕
          </p>
          <header className="modal__header"> {header}</header>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
