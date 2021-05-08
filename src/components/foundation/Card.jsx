import PropTypes from "prop-types";

function Card({ children }) {
  return (
    <div className="rounded-xl p-4 border-2 border-solid my-4">{children}</div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
