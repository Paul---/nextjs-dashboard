'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { ClearSearchBtn } from './ClearSearchBtn';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [searchValue, setSearchValue] = useState(
    `${params.toString().replace(/page=\d/, "").replace('query=', '')}`,
  );

  const clearSearch = () => {
    params.delete('query');
    setSearchValue('');
    replace(`${pathname}?${params.toString()}`);
  };

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
    params.set('page', '1');
    if (value) {
      params.set('query', value);
      replace(`${pathname}?${params.toString()}`);
    } else {
      clearSearch();
    }
  };

  return (
    <div className="flex flex-1 flex-shrink-0">
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          aria-label={placeholder}
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={handleChange}
          value={searchValue}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <div className="ml-5">
        {/* TODO: add icon for smaller screens */}
        <ClearSearchBtn
          buttonName="Clear Search..."
          clickFunction={clearSearch}
        />
      </div>
    </div>
  );
}
