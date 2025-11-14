import { currentUser } from "@clerk/nextjs/server";

import { Guest } from "@/app/components/Guest";

export default async function HomePage() {
  const user = await currentUser();

  if (!user) return <Guest />;

  const userName =
    user.firstName ?? user.emailAddresses?.[0]?.emailAddress ?? "beloved user";

  return (
    <main>
      <h1>Welcome, {userName}!</h1>
    </main>
  );
}
