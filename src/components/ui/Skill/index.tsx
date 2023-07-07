import { useTranslations } from "next-intl";
import { SkillContent } from "./SkillContent";
import { skills } from "@/utlis/const";

const Skill = (): React.ReactElement => {
  const t = useTranslations("Skill");

  return (
    <section className="py-20 mx-auto max-w-7xl lg:max-w-4xl xl:max-w-6xl  2xl:max-w-7xl" id="skills">
      <div className="flex justify-center mb-16" data-aos="zoom-in-up">
        <h2 className="font-bold text-5xl relative title">{t("title")}</h2>
      </div>

      <div className="grid mx-7 md:gap-16 lg:grid-cols-2" data-aos="zoom-in-up">
        <SkillContent
          svgId="brackets-curly"
          title="Frontend Developer"
          items={skills.frontend}
          d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"
        />

        <SkillContent
          svgId="server-connection"
          title="Backend Developer"
          items={skills.backend}
          d="M11,13a1,1,0,1,0,1,1A1,1,0,0,0,11,13ZM7,13a1,1,0,1,0,1,1A1,1,0,0,0,7,13ZM22,4a3,3,0,0,0-3-3H5A3,3,0,0,0,2,4V8a3,3,0,0,0,.78,2A3,3,0,0,0,2,12v4a3,3,0,0,0,3,3h6v2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2H13V19h6a3,3,0,0,0,3-3V12a3,3,0,0,0-.78-2A3,3,0,0,0,22,8ZM20,16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-8a1,1,0,0,1-1,1H5A1,1,0,0,1,4,8V4A1,1,0,0,1,5,3H19a1,1,0,0,1,1,1ZM11,5a1,1,0,1,0,1,1A1,1,0,0,0,11,5ZM7,5A1,1,0,1,0,8,6,1,1,0,0,0,7,5Z"
        />

        <SkillContent
          svgId="database"
          title="Databases"
          items={skills.database}
          d="M8,16.5a1,1,0,1,0,1,1A1,1,0,0,0,8,16.5ZM12,2C8,2,4,3.37,4,6V18c0,2.63,4,4,8,4s8-1.37,8-4V6C20,3.37,16,2,12,2Zm6,16c0,.71-2.28,2-6,2s-6-1.29-6-2V14.73A13.16,13.16,0,0,0,12,16a13.16,13.16,0,0,0,6-1.27Zm0-6c0,.71-2.28,2-6,2s-6-1.29-6-2V8.73A13.16,13.16,0,0,0,12,10a13.16,13.16,0,0,0,6-1.27ZM12,8C8.28,8,6,6.71,6,6s2.28-2,6-2,6,1.29,6,2S15.72,8,12,8ZM8,10.5a1,1,0,1,0,1,1A1,1,0,0,0,8,10.5Z"
        />

        <SkillContent
          svgId="cloud-database-tree"
          title="Cloud Services"
          items={skills.cloudService}
          d="M22.5,14.5a2,2,0,0,0-2-2h-6a2,2,0,0,0-2,2h-3v-3h2.33A3.66,3.66,0,0,0,13,4.37,5,5,0,0,0,3.57,5.65,3,3,0,0,0,4.5,11.5h3v8a1,1,0,0,0,1,1h4a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2v-2a2,2,0,0,0-.28-1,2,2,0,0,0,.28-1Zm-18-5a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.66A1.65,1.65,0,0,1,13.5,7.83,1.67,1.67,0,0,1,11.83,9.5Zm8,9h-3v-2h3a2,2,0,0,0,.28,1A2,2,0,0,0,12.5,18.5Zm2,2v-2h6v2Zm0-4v-2h6v2Z"
        />
      </div>
      <div className="mt-16 flex justify-center mb-16 md:mt-32">
        <h2 className="font-bold text-4xl text-center relative md:text-5xl">{t("description")}</h2>
      </div>
      <div className="grid gap-16 md:grid-cols-2">
        <div className="mx-14 space-y-10" data-aos="fade-right">
          <div className="flex justify-center">
            <h3 className="text-2xl">Frontend APP</h3>
          </div>
          <blockquote>
            <p>{t("frontend")}</p>
          </blockquote>
        </div>

        <div className="mx-14 space-y-10" data-aos="fade-left">
          <div className="flex justify-center">
            <h3 className="text-2xl">Backend API REST</h3>
          </div>
          <blockquote>
            <p>{t("backend")}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Skill;
