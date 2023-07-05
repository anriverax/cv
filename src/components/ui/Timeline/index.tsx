import { useTranslations } from "next-intl";
import Section from "../../Section";
import { TimelineItem } from "./TimelineItem";

export function Timelie(): React.ReactElement {
  const t = useTranslations("Timeline");

  const training: Training = {
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
    ],
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
    <Section sectionId="timeline" title="Timeline">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:mx-7">
        <TimelineItem
          title="Education"
          data={training.education}
          svgId="graduation-cap"
          d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"
        />

        <TimelineItem
          title="Work"
          data={training.work}
          svgId="bag-alt"
          d="M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.71,21.71,0,0,0,8,1.53A21.75,21.75,0,0,0,20,13Zm0-7.69a19.89,19.89,0,0,1-16,0V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z"
        />
      </div>
    </Section>
  );
}
