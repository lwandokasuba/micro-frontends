export default function Home() {
  return (
    <div className="p-10 font-sans">
      <h1 className="text-3xl font-bold mb-6">Internal Account</h1>
      <div className="border p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">User Profile</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Order History</h2>
        <p className="text-gray-500">No recent orders found.</p>
      </div>
    </div>
  );
}
