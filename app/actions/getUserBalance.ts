"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

type GetUserBalanceResult = {
  data?: { balance: number; income: number; expense: number };
  error?: string;
};

export const getUserBalance = async (): Promise<GetUserBalanceResult> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      select: { amount: true },
    });

    const { income, expense } = transactions.reduce(
      (acc, { amount }) => {
        if (amount >= 0) {
          acc.income += amount;
        } else {
          acc.expense += Math.abs(amount);
        }
        return acc;
      },
      { income: 0, expense: 0 },
    );

    return {
      data: {
        balance: income - expense,
        income,
        expense,
      },
    };
  } catch {
    return { error: "Unable to fetch balance" };
  }
};
