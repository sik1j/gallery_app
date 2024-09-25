import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const Images = async () => {
  const signedInUserId = (await auth()).userId;

  const images = signedInUserId
    ? await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
        where: (model, { eq }) => eq(model.userId, signedInUserId),
      })
    : [];

  return (
    <div className="flex flex-wrap gap-5">
      {images.map((img, ind) => (
        <div className="flex w-48 flex-col">
          <img src={img.url} key={img.id} />
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  // const posts = await db.query.posts.findMany();

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above{" "}
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
