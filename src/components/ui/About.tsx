"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Section from "../Section";
export function About(): React.ReactElement {
  const t = useTranslations("About");
  const pathname = usePathname();

  return (
    <Section sectionId="about" title={t("title")}>
      <div>
        <div className="grid sm:h-[calc(100%_-_192px)] lg:grid-cols-2 lg:gap-16">
          <div className="relative flex justify-center mb-10 md:items-center" data-aos="fade-up">
            <Image
              src="/img/preview4.png"
              alt="profile"
              className="rounded-full mx-5 w-[250px] h-[250px] border-2 border-[#20396f] sm:w-[320px] sm:h-[320px] sm:mx-auto"
              height={320}
              width={320}
            />
            <span className="hidden absolute rounded-full border border-dashed border-t-transparent border-b-transparent border-l-[#20396f] border-r-[#20396f] h-[320px] sm:flex sm:w-[360px] sm:rotate-45 md:items-center"></span>
          </div>

          <div className="flex items-center mx-7 lg:mx-auto" data-aos="fade-up">
            <div>
              <Link
                href={pathname === "/" ? "/cv" : `${pathname}/cv`}
                className="flex space-x-3 font-bold underline cursor-pointer"
              >
                <Image src="/img/pdf.png" alt="download" className="w-6 h-6" height={24} width={24} />
                <span>{t("pdf")}</span>
              </Link>

              <br />
              <p>
                {t("one")} {new Date().getFullYear() - 2014} {t("two")}
              </p>
              <br />
              <p>{t("three")}</p>
              <br />
              <p>{t("four")}</p>
              <br />
              <p>{t("five")}</p>
              <br />
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="favorite"
                  className="w-16 h-16 mr-3"
                >
                  <path
                    fill="#fed813"
                    d="M17.562 21.56a1 1 0 0 1-.465-.116L12 18.764l-5.097 2.68a1 1 0 0 1-1.45-1.053l.973-5.676-4.124-4.02a1 1 0 0 1 .554-1.705l5.699-.828 2.549-5.164a1.04 1.04 0 0 1 1.793 0l2.548 5.164 5.699.828a1 1 0 0 1 .554 1.705l-4.124 4.02.974 5.676a1 1 0 0 1-.985 1.169Z"
                  ></path>
                </svg>
                <p className="font-bold">{t("six")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
