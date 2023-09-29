'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination () {

  const searchParams = useSearchParams()

  const limitParam =  searchParams.get('limit');
  const offsetParam =  searchParams.get('offset');

  const limit = Number.isInteger(+limitParam!) ? +limitParam! : 20;
  const offset = Number.isInteger(+offsetParam!) ? +offsetParam! : 0;

  return (
    <div className="flex justify-between p-3">
      <Link href={`/?offset=${(offset) > 0 ? offset - limit : offset }&limit=${limit}`}>Prev</Link>
      Page: {(offset / limit) + 1}
      <Link href={`/?offset=${+offset + +limit}&limit=${limit}`}>Next</Link>
    </div>
  )
}

