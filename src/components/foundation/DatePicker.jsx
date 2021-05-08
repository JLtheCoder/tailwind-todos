import PropTypes from "prop-types";

function DatePicker({ value, onChange }) {
  return (
    <input
      type="datetime-local"
      class="rounded px-3 py-1 border-2 border-gray-300 my-1 block w-full p-1"
      value={value}
      onChange={onChange}
    />
  );
}

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
