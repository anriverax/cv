"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import { useTranslations } from "next-intl";

const Wrapper = (): React.ReactElement => {
  const t = useTranslations("Wrapper");
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Full Stack Developer</i>", "<i>Web Developer</i>", "<i>Freelancer</i>"],
      typeSpeed: 50,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="text-white grid h-screen md:h-[calc(100vh_-_64px)] md:grid-cols-2 md:items-center md:justify-center">
      <div className="h-full relative flex items-center justify-center">
        <div className="xs:mt-16 md:mt-0">
          <h1 className="text-4xl text-center sm:text-6xl lg:mx-7">
            {t("greeting")}, <br />
            {t("Im")} <span className="text-[#fed813]">Anibal Rivera</span>
          </h1>
          <div className="text-2xl text-center sm:text-3xl">
            {t("Im")} <span ref={el}></span>
          </div>

          <div
            className="mt-10 text-center py-4 xs:mt-16 md:mt-0 md:absolute md:bottom-24 md:left-0 md:right-0"
            data-aos="fade-up"
          >
            <Link
              href="#contact"
              className="px-5 py-2.5 border-2 border-white rounded-lg hover:bg-white hover:text-[#20396f] hover:font-bold"
            >
              {t("contact")}
            </Link>
            <div className="flex justify-center mt-14 space-x-3 px-2 xs:mt-16">
              <Link href="https://github.com/anriverax" target="_blank">
                <Image src="/img/github.png" alt="github" className="w-6 h-6" height={24} width={24} />
              </Link>
              <span className="text-white">|</span>
              <Link href="https://www.linkedin.com/in/anibal-antonio-rivera-480597164" target="_blank">
                <Image
                  src="/img/linkedin.png"
                  alt="linkedin"
                  className="w-6 h-6"
                  height={24}
                  width={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden text-white m-auto w-[80%] h-[80%] relative before:content-[""] before:absolute before:bottom-12 before:border-[1px] before:border-dashed before:h-1/4 after:content-[""] after:absolute after:top-0 after:border-[1px] after:border-dashed after:h-1/4 after:right-0 xs:block sm:mx-auto sm:h-[75%] sm:w-[70%] sm:before:bottom-20 sm:before:left-5 sm:after:right-5 sm:after:top-5 md:w-full md:h-[60%] md:flex md:items-center md:mx-0 md:before:h-1/4 md:before:bottom-20 md:before:left-0 md:after:top-20 md:after:h-1/4 md:after:right-10 lg:w-auto lg:before:bottom-28 lg:before:h-1/3 lg:after:right-3 lg:after:h-1/3 lg:after:top-28 xl:w-[75%] xl:h-[75%] xl:mx-auto xl:after:right-0'>
        <Image
          src="/img/profile2.png"
          alt="profile"
          className="block rounded-lg mx-auto w-[80%] h-[80%] xs:h-[90%] md:mx-5 md:h-[70%] lg:w-[90%] xl:w-full"
          height={260}
          width={372}
        />
      </div>
    </section>
  );
};

export default Wrapper;
