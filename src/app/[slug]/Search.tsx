'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Search = () => {
  const [value, setValue] = useState('')

  const { replace } = useRouter();
  const path = usePathname();;

  useEffect(() => {
    replace(!!value ? `${path}?cryptocurrency=${value}` : path);
  }, [value]);

  return (
    <input className="text-neutral-800 h-11 w-80 px-4" onChange={event => setValue(event.target.value)} placeholder="eg: bitcoin" type="text" value={value} />
  )
}

export default Search;
