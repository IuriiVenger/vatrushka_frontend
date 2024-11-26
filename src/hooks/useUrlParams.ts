import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const useUrlParams = <T extends string | boolean>(param: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramValue = (() => {
    const value = searchParams.get(param);
    if (value === 'true') return true as T;
    if (value === 'false') return false as T;
    return value as T | null;
  })();

  const createQueryString = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(param, value);
    return params.toString();
  };

  const setParam = (value: T) => {
    const stringValue: string = typeof value === 'boolean' ? String(value) : value;
    router.push(`${pathname}?${createQueryString(stringValue)}`);
  };

  const removeParam = () => router.push(`${pathname}`);

  return {
    paramValue,
    setParam,
    removeParam,
  };
};
