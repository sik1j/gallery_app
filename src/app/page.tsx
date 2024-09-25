import Link from "next/link";
import mockData from "../../mock.json";
import { db } from "~/server/db";

const data = mockData.map(({ key, url }) => ({ key, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-5">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...data].map((img, ind) => (
          <div className="w-48">
            <img src={img.url} key={img.key} />
          </div>
        ))}
      </div>
    </main>
  );
}
