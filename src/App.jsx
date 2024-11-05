import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  return (
    <>
      <div className="container mx-auto mt-5 font-inter text-[#1E272D]">
        <Header />
        <CreateCustomer />
        <Customer />
      </div>
    </>
  );
}

export default App;
