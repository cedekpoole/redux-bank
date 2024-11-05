import { useSelector } from "react-redux";
import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import Container from "./components/Container";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

function App() {
  const hasAccount = useSelector((store) => store.customer.hasAccount);

  return (
    <>
      <Container>
        <Header />
        {!hasAccount ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <BalanceDisplay />
            <AccountOperations />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
