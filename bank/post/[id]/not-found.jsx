import Link from "next/link";

const customNotFound = () => {
  return (
    <main className="text-center">
      <br /><br /><br /><br />
      <h2>Page not found customized version </h2>
      <Link href={`/`}>
      <p>Go Back to Home</p>
      </Link>
    </main>
  )
}
export default customNotFound;