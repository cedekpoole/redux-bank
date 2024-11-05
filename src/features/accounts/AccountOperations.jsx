import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormButton from "../../components/FormButton";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("GBP");

  const dispatch = useDispatch();

  const account = useSelector((store) => store.account);
  const { loan, loanPurpose: currentLoanPurpose, isLoading } = account;

  function handleDeposit() {
    if (!depositAmount) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("GBP");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;

    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="max-w-sm m-3">
      <h2 className="mt-5 mb-3">Your account operations...</h2>
      <div className="flex flex-col gap-4">
        {/* Deposit Section */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">DEPOSIT</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(+e.target.value)}
              placeholder="Amount"
              className="border rounded p-1 flex-grow"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-1 border rounded"
            >
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="GBP">£</option>
            </select>
            <FormButton onClick={handleDeposit} disabled={isLoading}>
              {isLoading ? "Loading..." : "Deposit"}
            </FormButton>
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">WITHDRAW</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(+e.target.value)}
              placeholder="Amount in £"
              className="border rounded p-1 flex-grow"
            />
            <FormButton onClick={handleWithdrawal}>Withdraw</FormButton>
          </div>
        </div>

        {/* Loan Section */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">REQUEST LOAN</label>
          <div className="flex gap-2 mb-1">
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(+e.target.value)}
              placeholder="Loan amount"
              className="border rounded p-1 flex-grow"
            />
            <FormButton onClick={handleRequestLoan}>Request £</FormButton>
          </div>
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            className="border rounded p-1"
          />
        </div>

        {/* Payback Section */}
        {loan > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm">
              PAY BACK £{loan} ({currentLoanPurpose})
            </span>
            <button
              onClick={handlePayLoan}
              className="bg-gray-200 hover:bg-gray-100 py-1 px-2 rounded shadow-sm"
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
