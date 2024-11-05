import { useState } from "react";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div className="max-w-lg mb-3 p-4">
      <h2 className="text-xl font-syne font-bold mb-4">CREATE NEW CUSTOMER</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1">Customer full name:</label>
          <input
            className="border rounded px-2 py-1"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">National ID:</label>
          <input
            className="border rounded px-2 py-1"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button
          className="self-end bg-gray-200 hover:bg-gray-100 py-1.5 px-4 rounded shadow-sm font-syne"
          onClick={handleClick}
        >
          CREATE
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
