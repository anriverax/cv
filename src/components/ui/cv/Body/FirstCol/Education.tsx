"use client";

import { useTranslations } from "next-intl";
import cx from "classnames";
import SubTitle from "@/components/SubTitle";

export function Education() {
  const t = useTranslations("Timeline");

  const training = {
    education: [
      {
        title: t("education.one.title"),
        place: t("education.one.place"),
        description: [],
        years: "2009 - 2013"
      },
      {
        title: t("education.two.title"),
        place: t("education.two.place"),
        description: [],
        years: "2005 - 2007"
      },
      {
        title: t("education.three.title"),
        place: t("education.three.place"),
        description: [],
        years: "1996 - 2004"
      }
    ]
  };

  return (
    <div className="space-y-5 my-10">
      <SubTitle
        svgId="graduation-cap"
        title={t("title3")}
        d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"
      />
      <ul className="text-xs">
        {training.education.map((item: TimelineItem, index: number) => (
          <li key={index} className="relative">
            <div>
              <div className="flex items-center">
                <h4 className="font-bold">{item.title}</h4>
              </div>
              <div>
                <p className="italic text-xs">{item.place}</p>
                <div
                  className={cx("flex items-center  -mt-[2px]", {
                    "pb-5": training.education.length != index + 1
                  })}
                >
                  <div className="print2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      id="calendar-alt"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        fill="#20396F"
                        d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-xs -mt-[1px]">{item.years}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
