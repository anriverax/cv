import Image from "next/image";
import { CvSkill } from "@/components/ui/cv/Body/FirstCol/CvSkills";
import { Education } from "@/components/ui/cv/Body/FirstCol/Education";

export function FirstCol() {
  return (
    <div>
      <div className="inline-flex justify-center w-full">
        <Image
          src="/img/profile.png"
          alt="profile"
          className="rounded-full h-[150px] w-[250px]"
          height={150}
          width={250}
        />
      </div>
      <Education />
      <CvSkill />
    </div>
  );
}
