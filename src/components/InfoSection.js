import { useState } from "react";
import React from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function InfoSection(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function editInfoHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="line-break">
          <ul>
            {props.info.map((info) => {
            return <li key={info.id}>{info.label} {info.content}</li>
          })}
          </ul>
        </div>
        <div className="actions">
          <button className="btn" onClick={editInfoHandler}>
            Edit
          </button>
        </div>

        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onSave={closeModalHandler} info={props.info}/>
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default InfoSection;
