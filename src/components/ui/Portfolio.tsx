"use client";

import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { useTranslations } from "next-intl";
import Section from "../Section";
import Image from "next/image";
import Link from "next/link";

register();

const Portfolio = (): React.ReactElement => {
  const [start, setStart] = useState<boolean>(false);
  const t = useTranslations("Portfolio");

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-explicit-any
    const swiperEl = document.querySelector("swiper-container") as any;

    const params = {
      injectStyles: [
        `.swiper-initialized {
          padding-bottom: 75px;
          overflow-y: hidden;
          display:block;


        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #999;
          position: absolute;
          right:0;
          bottom:0;
          top:auto;
          &::after {
            font-size:25px;
          }
          &:hover {
            font-weight: bold
          }
        }

        .swiper-button-prev {
          left:90%;
        }

        .swiper-button-next{
          left:80%;
        }

        @media (min-width: 640px) {
          .swiper-button-next {
            left: 90%;
          }
          .swiper-button-prev {
            left:95%;
          }
        }

        @media (min-width: 1280px) {
          .swiper-button-next {
            left: 95%;
          }
          .swiper-button-prev {
            left:97%;
          }
        }

      .swiper-pagination {
        position: absolute;
        left: 0 !important;
        bottom: 20px;
        top: auto !important;
        display: flex;
        align-items: center;
      }

      .progressbar {
        margin: auto 20px;
        height: 2px;
        width: 10%;
        background: rgba(153, 153, 153,0.2);
        & > . {
          display:block;
          width: 10%;
          height: 2px;
          background: #999;
          transition: all;
        }
      }`
      ],
      on: {
        init: function () {
          setStart(true);
        }
      },
      spaceBetween: 50,
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        type: "custom",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderCustom: function (_swiper: any, current: number, total: number) {
          const num = (current / total) * 100;
          return `<span>${current}</span> <span class="progressbar"><span class="" style="width:${num}%"></span></span><span>${total}</span>`;
        }
      },
      breakpoints: {
        320: { spaceBetween: 50, slidesPerView: 1 },
        640: { spaceBetween: 50, slidesPerView: 2 },
        1024: { spaceBetween: 50, slidesPerView: 3 }
      },
      navigation: true
    };

    Object.assign(swiperEl, params);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    swiperEl.initialize();
  }, []);

  return (
    <Section sectionId="portfolio" title={t("title")}>
      <div className="mx-7">
        <p className="text-center w-full -mt-14 mb-16">{t("description")}</p>

        <swiper-container className="mySwiper" init="false">
          {start && (
            <>
              <swiper-slide>
                <div className="max-w-sm bg-white border rounded-lg relative">
                  <Link href="https://wedding.innovacoresv.com/" target="_blank">
                    <div>
                      <Image
                        width={2048}
                        height={1536}
                        className="rounded-t-lg w-full h-full"
                        src="https://wedding.innovacoresv.com/images/slider/civil_marriage_kiss.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xl">{t("project.wedding.title")}</p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {t("project.wedding.description")}
                      </p>
                    </div>
                  </Link>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="max-w-sm bg-white border rounded-lg relative">
                  <Link href="https://wedding.innovacoresv.com/" target="_blank">
                    <div>
                      <Image
                        width={2048}
                        height={1536}
                        className="rounded-t-lg w-full h-full"
                        src="https://wedding.innovacoresv.com/images/slider/civil_marriage_kiss.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xl">{t("project.wedding.title")}</p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {t("project.wedding.description")}
                      </p>
                    </div>
                  </Link>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div className="max-w-sm bg-white border rounded-lg relative">
                  <Link href="https://wedding.innovacoresv.com/" target="_blank">
                    <div>
                      <Image
                        width={2048}
                        height={1536}
                        className="rounded-t-lg w-full h-full"
                        src="https://wedding.innovacoresv.com/images/slider/civil_marriage_kiss.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xl">{t("project.wedding.title")}</p>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {t("project.wedding.description")}
                      </p>
                    </div>
                  </Link>
                </div>
              </swiper-slide>
            </>
          )}
        </swiper-container>
      </div>
    </Section>
  );
};

export default Portfolio;
