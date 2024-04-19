import Link from "next/link";

export default function Home() {
  return (
    <main className="p-11">
      <h1>Choose an option!</h1>
      <ul className="flex flex-col mt-6 gap-y-4 pl-4">
        <li>
          <Link className="underline" href="/assets">Assets</Link>
        </li>
        <li>
          <Link className="underline" href="/rates">Rates</Link>
        </li>
      </ul>
    </main>
  );
}
