import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';


export default function ImportRates({ show, setShow }) {

  const handleClose = () => {
    setShow(false);
  }

  const onClickYes = () => {
    setShow(false);
    toast.success('Quotation Saved', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  return (
    <div>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:'14px'}}>Magod Laser:Import Rates</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:'12px'}}> Current Details will be  deleted before importing.Continue?
        </Modal.Body>
        <Modal.Footer>
          <button className='button-style' onClick={onClickYes}>
            Yes
          </button>
          <button className='button-style' variant="secondary" onClick={handleClose}>
            No
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
