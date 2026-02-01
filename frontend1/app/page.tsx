import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-6">Catalog: Product List</h1>
      <ul className="space-y-4">
        {[1, 2, 3].map((id) => (
          <li key={id} className="border p-4 rounded shadow hover:bg-gray-50">
            <Link href={`/${id}`} className="text-blue-600 hover:underline">
              View details for Product {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
