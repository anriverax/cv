"use client";
import { useEffect } from "react";
import Tag from "./Tag";
import SubTitle from "@/components/SubTitle";

// Render header list
function SkillItem({ data }: SkillItemProps): React.ReactElement {
  return (
    <>
      {data.length > 1 ? (
        <div className="flex flex-wrap gap-4 md:gap-0 md:flex-auto">
          {data.map((element: Parents, index2: number) => (
            <Tag
              key={index2}
              img={`/img/skills/${element.pathAlt}.png`}
              alt={element.pathAlt}
              title={element.title}
              favorite={element.favorite}
            />
          ))}
        </div>
      ) : (
        <Tag
          img={`/img/skills/${data[0].pathAlt}.png`}
          alt={data[0].pathAlt}
          title={data[0].title}
          favorite={data[0].favorite}
        />
      )}
    </>
  );
}

// Render body list
function SkillElement({ data }: SkillElementProps): React.ReactElement {
  useEffect(() => {
    document.addEventListener("aos:in", () => {
      const el = document.getElementsByClassName("aosWidth");

      for (let i = 0; i < el.length; i++) {
        el[i].classList.add("animationWidth");
      }
    });
  });

  useEffect(() => {
    document.addEventListener("aos:out", () => {
      const el = document.getElementsByClassName("aosWidth");
      console.log(el);

      for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("animationWidth");
      }
    });
  });

  return (
    <>
      {data.map((item: Skill, index: number) => (
        <li key={index}>
          <div className="flex mb-3 sm:justify-between">
            <SkillItem data={item.parents} />
            <span className="hidden sm:block">{`${item.score}%`}</span>
          </div>
          <div className="h-2 bg-[rgba(45,171,227,0.2)] rounded-lg hidden sm:block">
            <span
              className="h-2 bg-[#2dabe3] block rounded-lg aosWidth"
              style={{ width: `${item.score}%` }}
            ></span>
          </div>
          {item.children && item.children.length > 0 && (
            <ul className="mt-5 md:mt-10 ml-10 sm:space-y-10">
              {item.children && <SkillElement data={item.children} />}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

// Render all skill section
export function SkillContent({ svgId, title, items, d }: SkillContentProps): React.ReactElement {
  return (
    <div className="mb-10 md:mb-auto space-y-10">
      <SubTitle svgId={svgId} title={title} d={d} />
      <ul className="sm:space-y-10">
        <SkillElement data={items} />
      </ul>
    </div>
  );
}
