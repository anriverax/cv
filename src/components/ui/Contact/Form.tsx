"use client";

import { useTranslations } from "next-intl";
import SubTitle from "@/components/SubTitle";
import Input from "@/components/form/Input";
import Button from "@/components/form/Button";
import TextArea from "@/components/form/Textarea";
import { useFecthData } from "./hook/useFetchData";

const Form = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFecthData();

  const { fullName, subject, email, project } = values;
  const t = useTranslations("Contact");

  return (
    <div>
      <SubTitle
        svgId="message"
        title={t("form.title")}
        d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
      />
      <form className="mt-10" onSubmit={handleSubmit}>
        <Input
          nameId="fullName"
          label={t("form.fullName")}
          value={fullName}
          type="text"
          error={Boolean(touched.fullName && errors.fullName)}
          errorMessage={errors.fullName || ""}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          nameId="subject"
          label={t("form.subject")}
          value={subject}
          type="text"
          error={Boolean(touched.subject && errors.subject)}
          errorMessage={errors.subject}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Input
          nameId="email"
          label={t("form.email")}
          value={email}
          type="email"
          error={Boolean(touched.email && errors.email)}
          errorMessage={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextArea
          nameId="project"
          label={t("form.project")}
          value={project}
          error={Boolean(touched.project && errors.project)}
          errorMessage={errors.project}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" value={t("form.btn")} isSubmitting={false} actionBtn="success" />
      </form>
    </div>
  );
};

export default Form;
