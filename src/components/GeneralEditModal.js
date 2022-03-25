import React, { useRef } from "react";


function GeneralEditModal(props) {
  const infoInputRef = useRef();

  function saveHandler(event) {
    event.preventDefault();
    const enteredInfo = infoInputRef.current.value;
    props.info.content = enteredInfo;

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
                    defaultValue={info.content}
                    type="text"
                    ref = {infoInputRef}
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

export default GeneralEditModal;
