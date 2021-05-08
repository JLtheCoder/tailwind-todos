import PropTypes from "prop-types";

function CheckBox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="h-5 w-5 text-green-600 rounded"
      checked={checked}
      onChange={onChange}
    />
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
