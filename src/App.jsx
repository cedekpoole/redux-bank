import { useSelector } from "react-redux";
import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";

function App() {
  const hasAccount = useSelector((store) => store.customer.hasAccount);

  return (
    <>
      <div className="container mx-auto mt-5 font-inter text-[#1E272D]">
        <Header />
        {!hasAccount ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
          </>
        )}
      </div>
    </>
  );
}

export default App;
