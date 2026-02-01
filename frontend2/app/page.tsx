import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="border p-4 rounded shadow mb-6">
        <p className="mb-2">Your cart is currently empty.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Checkout
        </button>
      </div>
      <Link href="/cart/checkout" className="text-blue-600 hover:underline">
        Go to Checkout (Direct Link)
      </Link>
    </div>
  );
}
