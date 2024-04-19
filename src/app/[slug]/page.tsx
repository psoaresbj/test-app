import React from 'react'
import Search from './Search';
import { notFound } from 'next/navigation'
import Link from 'next/link';

const routes = ['assets', 'rates'];

export const generateStaticParams = () => {
  return routes.map(slug => ({ params: { slug } }));
}

const page = async ({ params, searchParams }: { params: { slug: string }, searchParams: { cryptocurrency?: string } }) => {
  const { slug } = params;
  const { cryptocurrency } = searchParams

  if (!routes.includes(slug)) {
    return notFound();
  }

  const raw = await fetch(`https://api.coincap.io/v2/${slug}/${cryptocurrency || ''}`);
  const response = await raw.json();


  return (
    <div className="p-20">
      <Link href="/">← Back</Link>
      <h2 className="text-[40px] mt-10">{slug} page</h2>
      <div className="mt-10">
        <Search />
      </div>
      {cryptocurrency && (
        <div className="mt-10">
          <pre>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default page;