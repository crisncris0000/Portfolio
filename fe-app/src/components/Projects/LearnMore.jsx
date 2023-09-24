import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function LearnMore({projectTitle, description, technologiesUsed}) {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Button variant="light" onClick={() => setShow(true)}>
                Learn More
            </Button>

            <Modal show={show}
                onHide={
                    () => setShow(false)
                }
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>

                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
