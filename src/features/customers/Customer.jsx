import { useSelector } from "react-redux";

function Customer() {
  // useSelector is a hook that allows you to extract data from the Redux store state
  const customer = useSelector((store) => store.customer);

  const { fullName } = customer;
  return <h2>Welcome, {fullName ? fullName : "Customer"}</h2>;
}

export default Customer;
