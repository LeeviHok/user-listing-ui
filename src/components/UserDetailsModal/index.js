import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UserDetailsTable from '../UserDetailsTable';

function UserDetailsModal({isVisible, userDetails, handleClose}) {
  return (
    <Modal show={isVisible} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <UserDetailsTable userDetails={userDetails}/>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserDetailsModal;
