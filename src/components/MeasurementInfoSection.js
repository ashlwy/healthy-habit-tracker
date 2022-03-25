import { useState } from "react";
import React from "react";
import MeasurementEditModal from "./MeasurementEditModal";
import Backdrop from "./Backdrop";

function MeasurementInfoSection(props) {
  const [editMeasurementIsOpen, setGeneralIsOpen] = useState(false);

  function editMeasurementHandler() {
    setGeneralIsOpen(true);
  }
  function closeMeasurementHandler() {
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
            <button className="btn" onClick={editMeasurementHandler}>
              Edit General
            </button>
          
        </div>

        {editMeasurementIsOpen && (
          <MeasurementEditModal
            onCancel={closeMeasurementHandler}
            onSave={closeMeasurementHandler}
            info={props.info}
          />
        )}
        {editMeasurementIsOpen && <Backdrop onCancel={closeMeasurementHandler} />}
      </div>
    </div>
  );
}

export default MeasurementInfoSection;
