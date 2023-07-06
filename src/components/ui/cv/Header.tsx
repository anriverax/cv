import { CVHeader } from "@/utlis/const";

export function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      <div>
        <h1 className="text-[35px] font-bold leading-loose">Anibal A. Rivera</h1>
        <p className="text-[20px]">FullStack Developer</p>
      </div>

      <ul className="text-xs mt-[15px]">
        {CVHeader.map((item: CvHeader, index: number) => (
          <li className="flex justify-center text-center" key={index}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
