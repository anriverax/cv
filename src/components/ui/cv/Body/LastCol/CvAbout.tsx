import { useTranslations } from "next-intl";
import SubTitle from "@/components/SubTitle";

export function CvAbout() {
  const t = useTranslations("About");

  return (
    <div className="space-y-5">
      <SubTitle
        svgId="user"
        title={t("title")}
        d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
      />
      <div className="text-xs">
        <p>
          {t("zero")} {new Date().getFullYear() - 2014} {t("two")}
        </p>
        <br />
        <p>{t("three")}</p>
        <br />
        <p className="font-bold">
          {t("language")}: <span className="font-normal">{t("spanish")}</span>
        </p>
      </div>
    </div>
  );
}
