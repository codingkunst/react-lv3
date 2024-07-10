import React from "react";
import "./Modal.css";

function Modal() {
  return (
    <>
      <div className="modal-area">
        <h1>Modal</h1>
        <div className="modal-line-area">
          <button className="two-modal-style">open modal</button>
          <button className="one-modal-style">open modal</button>
        </div>
      </div>
    </>
  );
}

export default Modal;

// import React, { useState } from "react";
// import "./Modal.css";
// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   return (
//     <div>
//       <h1>Modal</h1>
//       <button onClick={toggleModal} className="btn-modal">
//         open modal
//       </button>
//       <button className="btn-modal">open modal</button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <p>
//               There are two close and confirm buttons, and the modal does not
//               close when you click the outside area. When pressed the confirm
//               button, the log will be shown on console.
//             </p>
//             <button className="close-modal" onClick={toggleModal}>
//               close
//             </button>
//             <button className="close-modal" onClick={toggleModal}>
//               confirm
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
