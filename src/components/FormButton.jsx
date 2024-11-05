import PropTypes from "prop-types";

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

function FormButton({ onClick, disabled, children }) {
  return (
    <button
      className="self-end bg-gray-200 py-1 px-1.5 rounded hover:bg-gray-100 flex-shrink-0"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default FormButton;
