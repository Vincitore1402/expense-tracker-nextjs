"use server";

import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";
import { Transaction } from "@/types/Transaction";

type GetTransactionsResult = {
  data?: Transaction[];
  error?: string;
};

const getTransactions = async (): Promise<GetTransactionsResult> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return { data: transactions };
  } catch {
    return { error: "Unable to fetch transactions" };
  }
};

export default getTransactions;
