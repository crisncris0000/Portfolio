import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function LearnMore({projectTitle, description, status}) {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <Button variant="light" className="custom-btn" onClick={() => setShow(true)}>
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
                        {projectTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {description}
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <p>
                        Status: {status}
                    </p>
                </Modal.Footer>
            </Modal>
        </>
    );
}
