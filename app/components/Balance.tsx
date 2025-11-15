import { getUserBalance } from "@/app/actions/getUserBalance";

export const Balance = async () => {
  const { data, error } = await getUserBalance();

  if (error || !data) {
    return (
      <section className="balance-card">
        <p className="error">{error ?? "Unable to load your balance."}</p>
      </section>
    );
  }

  return (
    <section className="balance-card">
      <div>
        <p className="eyebrow">Total Balance:</p>
        <h1>${data.balance.toFixed(2)}</h1>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${data.income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${data.expense.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};
