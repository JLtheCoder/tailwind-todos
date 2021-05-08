import PropTypes from "prop-types";

function Header({ children }) {
  return <div className="font-bold text-xl mb-2">{children}</div>;
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;
