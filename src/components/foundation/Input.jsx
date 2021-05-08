import PropTypes from "prop-types";

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      class="rounded px-3 py-1 border-2 border-gray-300 my-1 block w-full p-1"
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
