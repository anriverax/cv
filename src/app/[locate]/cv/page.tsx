"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { jsPDF } from "jspdf";
import { usePathname } from "next/navigation";
import html2canvas from "html2canvas";
import { useTranslations } from "next-intl";
import { Header } from "@/components/ui/cv/Header";
import { Body } from "@/components/ui/cv/Body";
import LocaleSwitcher from "@/components/LocaleSwitcher";
/* eslint-disable */

const page = () => {
  const t = useTranslations("Cv");
  const templateRef = useRef<any>(null);
  const pathname = usePathname();

  const converHTMLToPDF = () => {
    const doc = new jsPDF({
      format: "letter",
      precision: 10
    });
    doc.setFont("Inter", "latin");

    document.querySelectorAll(".print").forEach((el: any) => (el.style.marginTop = "20px"));
    document.querySelectorAll(".print2").forEach((el: any) => (el.style.marginTop = "11px"));
    document.querySelectorAll(".print3").forEach((el: any) => (el.style.marginTop = "-36px"));
    html2canvas(templateRef.current).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      //doc.addImage(img, "JPEG", -146, -4, 0, 279);
      doc.addImage(img, "JPEG", 0, -7, 0, 279);
      document.querySelectorAll(".print").forEach((el: any) => (el.style.marginTop = "0px"));
      document.querySelectorAll(".print2").forEach((el: any) => (el.style.marginTop = "0px"));
      document.querySelectorAll(".print3").forEach((el: any) => (el.style.marginTop = "0px"));
      doc.save("cv - Anibal A. Rivera.pdf");
    });
  };
  //pathname.split("/cv")[0]
  return (
    <div>
      <div className="m-auto w-[216mm] p-10">
        <div className="flex justify-between">
          <Link
            href={pathname === "" ? "/" : pathname.split("/cv")[0]}
            className="flex space-x-3 font-bold underline cursor-pointer"
          >
            <Image src="/img/home.png" alt="home" className="w-6 h-6" height={24} width={24} />
            <span>{t("home")}</span>
          </Link>

          <div className="flex space-x-3 font-bold underline cursor-pointer">
            <LocaleSwitcher />
          </div>
          <div className="flex space-x-3 font-bold underline cursor-pointer" onClick={converHTMLToPDF}>
            <Image src="/img/print.png" alt="download" className="w-6 h-6" height={24} width={24} />
            <span>{t("print")}</span>
          </div>
        </div>
      </div>

      <div className="page text-black" ref={templateRef}>
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default page;
