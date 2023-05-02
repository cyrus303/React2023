import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        tempora nam accusamus quia provident cumque dolorum velit autem minima
        eaque excepturi voluptatem explicabo, cum placeat eligendi, dolores quae
        voluptatibus mollitia?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        tempora nam accusamus quia provident cumque dolorum velit autem minima
        eaque excepturi voluptatem explicabo, cum placeat eligendi, dolores quae
        voluptatibus mollitia?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        tempora nam accusamus quia provident cumque dolorum velit autem minima
        eaque excepturi voluptatem explicabo, cum placeat eligendi, dolores quae
        voluptatibus mollitia?
      </p>
    </div>
  );
}

export default ModalPage;
