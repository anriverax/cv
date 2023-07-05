import SubTitle from "@/components/SubTitle";

export function CvSkill() {
  return (
    <div className="space-y-5">
      <SubTitle
        svgId="brackets-curly"
        title="Skills"
        d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"
      />
      <ul className="text-xs">
        <li className="mb-1">HTML5</li>
        <li className="mb-1">CSS, SASS</li>
        <li className="mb-1">JavaScript, TypeScript</li>
        <li className="mb-1">TailwindCSS</li>
        <li className="mb-1">Bootstrap</li>
        <li className="mb-1">Material UI</li>
        <li className="mb-1">React, NextJS</li>
        <li className="mb-1">Jquery</li>
        <li className="mb-1">Angular</li>
        <li className="mb-1">Node, NestJS</li>
        <li className="mb-1">C#, Asp.net, .Net Core</li>
        <li className="mb-1">Php, Laravel</li>
        <li className="mb-1">AWS, Azure, Docker, Git</li>
        <li className="mb-1">PostgreSQL, Redis</li>
        <li className="mb-1">SQL Server, MongoDB</li>
      </ul>
    </div>
  );
}
