import { FirstCol } from "./FirstCol";
import { LastCol } from "./LastCol";

export function Body() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <FirstCol />
      <LastCol />
    </div>
  );
}
