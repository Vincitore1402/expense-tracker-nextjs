"use client";

import { toast } from "react-toastify";

import addTransaction from "@/app/actions/addTransaction";

export const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Transaction has been added");
  };

  return (
    <>
      <h3>Add transaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
