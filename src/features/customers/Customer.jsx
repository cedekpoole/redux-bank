import { useSelector } from "react-redux";

function Customer() {
  // useSelector is a hook that allows you to extract data from the Redux store state
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <h2 className="text-lg font-syne font-bold">
      WELCOME, {customer ? customer.toUpperCase() : "CUSTOMER"}
    </h2>
  );
}

export default Customer;
