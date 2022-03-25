import { useState } from "react";
import React from "react";
import GeneralEditModal from "./GeneralEditModal";
import Backdrop from "./Backdrop";

function GeneralInfoSection(props) {
  const [editGeneralIsOpen, setGeneralIsOpen] = useState(false);

  function editGeneralHandler() {
    setGeneralIsOpen(true);
  }
  function closeGeneralHandler() {
    setGeneralIsOpen(false);
  }

  return (
    <div>
      <div className="card">
        <h3>{props.title}</h3>
        <div className="line-break">
          <ul>
            {props.info.map((info) => {
              return (
                <li key={info.id}>
                  {info.label} {info.content}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="actions">
          <p>{"\n"}</p>
            <button className="btn" onClick={editGeneralHandler}>
              Edit General
            </button>
          
        </div>

        {editGeneralIsOpen && (
          <GeneralEditModal
            onCancel={closeGeneralHandler}
            onSave={closeGeneralHandler}
            info={props.info}
          />
        )}
        {editGeneralIsOpen && <Backdrop onCancel={closeGeneralHandler} />}
      </div>
    </div>
  );
}

export default GeneralInfoSection;
