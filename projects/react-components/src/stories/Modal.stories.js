import React from "react";
import { Modal, Button } from "../components";

export default {
  title: "Modal",
  component: Modal
};

export const Component = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div>
      Click Me
      <Button onClick={() => setModalOpen(!modalOpen)}>Open Modal</Button>
      <Modal isOpen={modalOpen}>
        <div>Modal Content</div>
      </Modal>
      <div id="modal-portal" />
    </div>
  );
};
