import PropTypes from "prop-types";

const ButtonThemes = ["success", "warning"];

function Button({ children, onClick, theme = "success" }) {
  const baseTheme = "font-semibold rounded-lg focus:outline-none";

  // Why text-red-500 has to be replaced after background??
  const colorThemes = {
    warning: "py-2 px-4 background-transparent text-red-500",
    success:
      "py-2 px-4 shadow-md text-white bg-green-500 hover:bg-green-700 focus:ring-green-400 focus:ring-opacity-75 focus:ring-2",
    link: "background-transparent text-blue-400 text-sm underline",
  };

  return (
    <button
      className={`${baseTheme} ${colorThemes[theme]}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
