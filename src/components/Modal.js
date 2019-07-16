
import React, {useState} from 'react';
import { Modal } from 'store-ui';


export const ModalAnimate = ({children}) => {
    const [modalIsOpen , setModalIsOpen] = useState(false);
    const handleClose = () =>setModalIsOpen(false);

    return (
        <React.Fragment>
  
          <button onClick={()=>setModalIsOpen(true)}>Open Modal</button>
          <Modal
              isOpen={modalIsOpen}
              handleClose={handleClose}
              title="Example Modal"
          >
            {children}
          </Modal>
        </React.Fragment>    
    );
  }
  