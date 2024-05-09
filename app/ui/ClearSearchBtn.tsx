import { ReactNode } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function ClearSearchBtn({
  buttonName,
  clickFunction,
  icon,
}: {
  buttonName: string;
  clickFunction: () => void;
  icon?: ReactNode;
}) {
  return (
    <button
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={clickFunction}
    >
      <span className="hidden md:block">{buttonName}</span>
      {icon || null}
    </button>
  );
}
