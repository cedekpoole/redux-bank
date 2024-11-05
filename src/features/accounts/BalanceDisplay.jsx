import { connect } from "react-redux";
import PropTypes from "prop-types";

BalanceDisplay.propTypes = {
  balance: PropTypes.number.isRequired,
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return (
    <div className=" my-2 p-2 bg-gray-100 w-44 text-center">
      {formatCurrency(balance)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
