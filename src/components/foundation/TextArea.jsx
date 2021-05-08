import PropTypes from "prop-types";

function TextArea({ value, onChange }) {
  return (
    <textarea
      type="text"
      className="rounded p-3 border-2 border-gray-300 my-1 block w-full"
      rows="3"
      value={value}
      onChange={onChange}
    />
  );
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
