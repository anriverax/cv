"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const [_isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (lang: string) => {
    startTransition(() => {
      router.replace(`/${lang}${pathname}`);
    });
  };

  return (
    <li className="flex items-center justify-center space-x-3 bg-white px-2 rounded-3xl">
      <Image
        src="/img/usa.png"
        width={64}
        height={64}
        alt="usa"
        className="w-4 h-3 cursor-pointer"
        onClick={() => onSelectChange("en")}
      />
      <span className="text-[#20396f]">|</span>
      <Image
        src="/img/elSalvador.png"
        width={64}
        height={64}
        alt="elSalvador"
        className="w-4 h-3 cursor-pointer"
        onClick={() => onSelectChange("es")}
      />
    </li>
  );
}
