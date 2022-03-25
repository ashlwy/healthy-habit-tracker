import React, { useRef } from "react";


function Modal(props) {
  const infoInputRef = useRef();

  function saveHandler(event) {
    event.preventDefault();
    props.onCancel();
  }

  function cancelHandler(event) {
    event.preventDefault();
    props.onSave();
  }

  return (
    <div className="modal">
      <p>Editing Mode</p>
      <div className="modal-body">
        <ul>
          {props.info.map((info) => {
            return (
              <form>
                <li key={info.id}>
                  {info.label}
                  <input
                    type="text"
                    ref = {infoInputRef}
                    defaultValue = {info.content}
                  />
                </li>
              </form>
            );
          })}
        </ul>
      </div>
      <p>{"\n\n\n"}</p>

      <button className="btn btn--alt" onClick={saveHandler}>
        Thing is Edited! SAVE!
      </button>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default Modal;
