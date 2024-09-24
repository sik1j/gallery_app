import Link from "next/link";
import mockData from "../../mock.json";

const data = mockData.map(({ key, url }) => ({ key, url }));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-5">
        {[...data, ...data, ...data].map(({ key, url }) => (
          <div className="w-48">
            <img src={url} key={key} />
          </div>
        ))}
      </div>
    </main>
  );
}
