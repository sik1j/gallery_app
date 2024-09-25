"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between border-b border-b-white p-5 text-2xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
