import { CvAbout } from "./CvAbout";
import { Experiencie } from "./Experiencie";

export function LastCol() {
  return (
    <div className="col-span-2 ml-5">
      <CvAbout />
      <Experiencie />
    </div>
  );
}
