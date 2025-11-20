import { getUserBalance } from "@/app/actions/getUserBalance";
import { formatCurrency } from "@/lib/utils";

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
        <h1>${formatCurrency(data.balance)}</h1>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${formatCurrency(data.income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${formatCurrency(data.expense)}</p>
        </div>
      </div>
    </section>
  );
};
