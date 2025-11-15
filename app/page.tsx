import { currentUser } from "@clerk/nextjs/server";
import { AddTransaction } from "@/app/components/AddTransaction";
import { Balance } from "@/app/components/Balance";

import { Guest } from "@/app/components/Guest";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) return <Guest />;

  const userName =
    user.firstName ?? user.emailAddresses?.[0]?.emailAddress ?? "beloved user";

  return (
    <main>
      <h2>Welcome, {userName}!</h2>
      <Balance />
      <AddTransaction />
    </main>
  );
}
