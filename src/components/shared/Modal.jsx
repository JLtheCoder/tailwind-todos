import PropTypes from "prop-types";
import Card from "../foundation/Card";
import Button from "../foundation/Button";

function Modal({ children, onSave, onClose, isShown = false }) {
  if (!isShown) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <Card>
            {children}
            <div className="flex justify-end pt-8">
              <Button theme="warning" onClick={onClose}>
                Close
              </Button>
              <Button onClick={onSave}>Save Changes</Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool,
};

export default Modal;
