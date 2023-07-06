import { useTranslations } from "next-intl";
import SubTitle from "@/components/SubTitle";

export function Experiencie() {
  const t = useTranslations("Timeline");

  const training = {
    work: [
      {
        title: t("work.one.title"),
        place: t("work.one.place"),
        description: [
          t("work.one.description.one"),
          t("work.one.description.two"),
          t("work.one.description.three")
        ],
        years: t("work.one.years")
      },
      {
        title: t("work.two.title"),
        place: t("work.two.place"),
        description: [
          t("work.two.description.one"),
          t("work.two.description.two"),
          t("work.two.description.three"),
          t("work.two.description.four")
        ],
        years: t("work.two.years")
      },
      {
        title: t("work.three.title"),
        place: t("work.three.place"),
        description: [t("work.three.description.one"), t("work.three.description.two")],
        years: t("work.three.years")
      }
    ]
  };

  return (
    <div className="my-10 space-y-5">
      <SubTitle
        svgId="bag-alt"
        title={t("title2")}
        d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
      />
      <ul className="space-y-5">
        {training.work.map((item: TimelineItem, index: number) => (
          <li key={index} className="text-xs">
            <h4 className="font-bold">{item.title}</h4>
            <span>{item.years}</span>
            <p className=" italic">Focus Services – ITO</p>
            <ul className="ml-10 list-disc">
              {item.description.map((element: string, i: number) => (
                <li key={i}>{element}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
