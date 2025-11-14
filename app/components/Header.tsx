import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

export const Header = async () => {
  await checkUser();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div className="div">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
