import PropTypes from "prop-types";

Container.propTypes = {
  children: PropTypes.node,
};

function Container({ children }) {
  return (
    <div className="container mx-auto mt-5 font-inter text-[#1E272D]">
      {children}
    </div>
  );
}

export default Container;
