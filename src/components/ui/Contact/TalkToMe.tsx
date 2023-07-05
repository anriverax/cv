import Link from "next/link";
import { useTranslations } from "next-intl";
import SubTitle from "@/components/SubTitle";
import { info } from "@/utlis/const";

function TalkToMeHeader({ name, id, d }: InfoHeader): React.ReactElement {
  return (
    <p className="flex items-center justify-center md:justify-normal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id={id}
        className="w-4 h-4 mr-2"
      >
        <path fill="#20396F" d={d}></path>
      </svg>
      {name}
    </p>
  );
}
function ClickOn({ href, title, target }: InfoLink): React.ReactElement {
  return (
    <p className="flex items-center justify-center md:justify-normal">
      <span className="mr-2">Click</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="arrow-right"
        className="w-4 h-4 mr-2"
      >
        <path
          fill="#20396F"
          d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
        ></path>
      </svg>
      <Link href={href} target={target}>
        {title}
      </Link>
    </p>
  );
}
export function TalkToMe(): React.ReactElement {
  const t = useTranslations("Contact");

  return (
    <div className="space-y-10">
      <SubTitle
        svgId="comment"
        title={t("talkToMe")}
        d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z"
      />
      <ul className="space-y-10">
        {info.map((item: Info, index: number) => (
          <li key={index}>
            <TalkToMeHeader name={item.header.name} id={item.header.id} d={item.header.d} />
            <ClickOn href={item.link.href} title={item.link.title} target={item.link.target} />
          </li>
        ))}
      </ul>
    </div>
  );
}
