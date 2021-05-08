import PropTypes from "prop-types";
import { useState } from "react";
import Card from "../foundation/Card";
import Header from "../foundation/Header";
import Button from "../foundation/Button";

function Modal({ linkText, title, children, onSave }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button theme="link" onClick={() => setShowModal(true)}>
        {linkText}
      </Button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <Card>
                <Header>{title}</Header>
                {children}
                <div className="flex justify-end pt-8">
                  <Button theme="warning" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      onSave();
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      )}
    </>
  );
}

Modal.propTypes = {
  linkText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onSave: PropTypes.func.isRequired,
};

export default Modal;
