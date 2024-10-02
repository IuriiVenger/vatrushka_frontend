import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useUrlParams = <T extends string>(param: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramValue = searchParams.get(param) as T | null;

  const createQueryString = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);

    return params.toString();
  };

  const setParam = (value: T) => router.push(`${pathname}?${createQueryString(value)}`);

  const removeParam = () => router.push(`${pathname}`);

  return {
    paramValue,
    setParam,
    removeParam,
  };
};
