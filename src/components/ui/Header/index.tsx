"use client";

import { useRef, MouseEvent, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import { useScroll } from "./hook/UseScroll";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Header = (): React.ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigationElement = useRef<HTMLDivElement>(null);
  const t = useTranslations("NavBar");

  const navLinks: NavLinks[] = [
    {
      href: "#home",
      name: t("home")
    },
    {
      href: "#about",
      name: t("about")
    },
    {
      href: "#skills",
      name: t("skills")
    },
    {
      href: "#portfolio",
      name: t("portfolio")
    },
    {
      href: "#timeline",
      name: t("timeline")
    },
    {
      href: "#contact",
      name: t("contact")
    }
  ];
  const { scrollPosition, handleClick } = useScroll(navigationElement, setShowMenu, navLinks, 30);

  return (
    <header
      className={cx("fixed z-20 w-full transition-colors ease-in-out duration-500 md:px-7", {
        "bg-white hover:border-dashed hover:border-b": scrollPosition > 200 || showMenu,
        "bg-transparent": scrollPosition <= 200
      })}
      ref={navigationElement}
    >
      <div className="mx-auto max-w-7xl h-16 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center mx-7 md:mx-0 md:my-5 md:block">
          <Image
            src="/img/preview3.png"
            alt="logo"
            width={32}
            height={32}
            className="h-8 block rounded-full"
          />

          <button
            className="my-5 flex flex-col w-[26px] h-[20px] border-none gap-[7px] pointer-events-auto md:hidden md:pointer-events-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <div
              className={cx("h-[2px] w-full rounded-md transition-all duration-500 origin-left", {
                "bg-[#20396f]": scrollPosition > 0 || showMenu,
                "bg-white": scrollPosition <= 0 && !showMenu,
                "rotate-45": showMenu
              })}
            ></div>
            <div
              className={cx("h-[2px] w-full rounded-md transition-all duration-500 origin-left", {
                "bg-[#20396f]": scrollPosition > 0 || showMenu,
                "bg-white": scrollPosition <= 0 && !showMenu,
                "opacity-0": showMenu
              })}
            ></div>
            <div
              className={cx("h-[2px] w-full rounded-md transition-all duration-500 origin-left", {
                "bg-[#20396f]": scrollPosition > 0 || showMenu,
                "bg-white": scrollPosition <= 0 && !showMenu,
                "-rotate-45": showMenu
              })}
            ></div>
          </button>
        </div>
        <nav
          className={cx("overflow-hidden transition-all ease-in-out duration-500", {
            "h-[325px] shadow-2xl border": showMenu,
            "h-0 shadow-none border-none md:h-auto": !showMenu
          })}
        >
          <ul
            className={cx(
              "block py-5 text-center space-y-5 bg-white md:flex md:bg-transparent md:text-left md:space-y-0 md:space-x-10 md:justify-center"
            )}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  key={link.name}
                  href={link.href}
                  className={cx("relative duration-300", {
                    "text-[#20396f]": scrollPosition > 0,
                    "text-[#20396f] md:text-white": scrollPosition <= 0
                  })}
                  onClick={(e: MouseEvent<HTMLElement>) => handleClick(e)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <LocaleSwitcher />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
