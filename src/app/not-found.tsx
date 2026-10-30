import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container not-found">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        This page hasn’t
        <br />
        been built.
      </h1>
      <Link href="/" className="primary-button">
        Back to the portfolio ↗
      </Link>
    </main>
  );
}
