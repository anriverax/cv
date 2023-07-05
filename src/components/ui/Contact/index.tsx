import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import { TalkToMe } from "./TalkToMe";
import Form from "./Form";

const Contact = (): React.ReactElement => {
  const t = useTranslations("Contact");

  return (
    <Section sectionId="contact" title={t("title")}>
      <div>
        <p className="text-center w-full -mt-14 mb-16">{t("description")}</p>
        <div className="grid mx-7 gap-16 md:grid-cols-2">
          <TalkToMe />
          <Form />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
