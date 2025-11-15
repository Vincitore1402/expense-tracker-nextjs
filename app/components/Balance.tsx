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
        <p className="eyebrow">Total Balance</p>
        <h1>${data.balance.toFixed(2)}</h1>
      </div>

      <div className="pill-group">
        <div className="pill pill--income">
          <span>Income: </span>
          <strong>${data.income.toFixed(2)}</strong>
        </div>
        <div className="pill pill--expense">
          <span>Expense: </span>
          <strong>${data.expense.toFixed(2)}</strong>
        </div>
      </div>
    </section>
  );
};
