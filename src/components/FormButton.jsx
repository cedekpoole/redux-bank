import PropTypes from "prop-types";

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

function FormButton({ onClick, children }) {
  return (
    <button
      className="self-end bg-gray-200 py-1 px-1.5 rounded hover:bg-gray-100 flex-shrink-0"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FormButton;
