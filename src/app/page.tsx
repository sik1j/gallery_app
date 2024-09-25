import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // const posts = await db.query.posts.findMany();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-5">
        {images.map((img, ind) => (
          <div className="flex w-48 flex-col">
            <img src={img.url} key={img.id} />
            <div>{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
