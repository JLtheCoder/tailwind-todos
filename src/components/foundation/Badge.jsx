import PropTypes from "prop-types";

function Badge({ children }) {
  return (
    <div className="rounded-xl inline-block text-sm px-2 py-1 bg-black text-white">
      {children}
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Badge;
