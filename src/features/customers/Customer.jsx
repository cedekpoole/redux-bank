import { useSelector } from "react-redux";

function Customer() {
  // useSelector is a hook that allows you to extract data from the Redux store state
  const customer = useSelector((store) => store.customer);

  const { fullName } = customer;
  return (
    <h2 className="text-lg font-syne font-bold">
      WELCOME, {fullName ? fullName.toUpperCase() : "CUSTOMER"}
    </h2>
  );
}

export default Customer;
