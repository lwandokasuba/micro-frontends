export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <div className="p-10 font-sans">
            <h2 className="text-2xl font-bold mb-4">Product Detail: {slug}</h2>
            <p className="mb-4">This is the details page for product {slug}.</p>
            <a href="/catalog" className="text-blue-600 hover:underline">
                &larr; Back to Catalog
            </a>
        </div>
    );
}
