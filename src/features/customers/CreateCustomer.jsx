import { useState } from "react";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div>
      <h2 className="text-2xl">Create new customer...</h2>
      <div className="flex flex-col gap-3">
        <div>
          <label>Customer full name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID:</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button
          className="self-start bg-gray-200 hover:bg-gray-100 py-2 px-2.5 rounded-lg shadow-sm"
          onClick={handleClick}
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
