import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const TopNav = () => (
  <nav className="flex justify-between border-b border-b-white p-5 text-2xl font-semibold">
    <div>Gallery</div>
    <div>
      <SignedOut>
        <SignInButton></SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  </nav>
);

export default TopNav;
