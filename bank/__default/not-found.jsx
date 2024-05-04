import Link from "next/link";

const notFound = () => {
  return (
    <main className="text-center">
      <br /><br /><br /><br />
      <h2>Page not found</h2>
      <Link href={`/`}>
      <p>Go Back</p>
      </Link>
    </main>
  )
}
export default notFound;
