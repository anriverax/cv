import SubTitle from "@/components/SubTitle";

export function CvAbout() {
  return (
    <div className="space-y-5">
      <SubTitle
        svgId="user"
        title="About me"
        d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
      />
      <div className="text-xs">
        <p>
          I am a Systems Engineer with 9 years of experience as a Full Stack Developer with rock-solid
          experience in building web applications. I have worked in various areas as a front-end
          developer, back-end developer, database, and cloud services. I possess the unique ability to
          tackle intricate technical challenges while crafting websites that exude sleekness and visual
          allure.
        </p>
        <br />
        <p>
          I am very passionate and dedicated to my work, which makes me organized and get things done in
          the shortest amount of time requested.
        </p>
        <br />
        <p className="font-bold">
          Languages: <span className="font-normal">Spanish (Native), English (B1 level)</span>
        </p>
      </div>
    </div>
  );
}
