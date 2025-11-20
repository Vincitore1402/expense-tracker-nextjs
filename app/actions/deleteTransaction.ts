"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

type DeleteTransactionResult = {
  message?: string;
  error?: string;
};

const deleteTransaction = async (
  transactionId: string,
): Promise<DeleteTransactionResult> => {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not found" };
  }

  if (!transactionId) {
    return { error: "Transaction id is required" };
  }

  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId,
      },
    });

    revalidatePath("/");

    return { message: "Transaction deleted" };
  } catch (error) {
    return { error: "Unable to delete transaction" };
  }
};

export default deleteTransaction;
