import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Multi-Zone Store!</h1>
      <p className="mb-4 text-lg">
        This is the main "Shell" application. It composes multiple micro-frontends together properly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <a href="/catalog" className="block p-6 border rounded hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">Browse Catalog &rarr;</h2>
          <p>View our amazing products (served by frontend1).</p>
        </a>
        <a href="/shop" className="block p-6 border rounded hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">View Cart &rarr;</h2>
          <p>Check your shopping cart (served by frontend2).</p>
        </a>
        <a href="/account" className="block p-6 border rounded hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-2">My Account &rarr;</h2>
          <p>Manage your profile (served by frontend3).</p>
        </a>
      </div>
    </div>
  );
}
