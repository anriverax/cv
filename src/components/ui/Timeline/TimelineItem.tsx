import cx from "classnames";
import SubTitle from "@/components/SubTitle";

function Description({ data }: DescriptionProps): React.ReactElement {
  return (
    <ul className="ml-10 text-sm list-disc">
      {data.map((item: string, index2: number) => (
        <li key={index2}>{item}</li>
      ))}
    </ul>
  );
}

export function TimelineItem({ data, title, d, svgId }: TimelineItemProps): React.ReactElement {
  return (
    <div
      className={cx("space-y-10 mx-7 md:mx-0", {
        "order-1 md:order-2": title === "Work",
        "order-2 md:order-1": title === "Education"
      })}
    >
      {/* data-aos="fade-up" arriba */}
      <SubTitle svgId={svgId} title={title} d={d} />
      <ul>
        {data.map((item: TimelineItem, index: number) => (
          <li
            key={index}
            className="relative before:content-[''] before:absolute before:-bottom-3 before:left-[5px] before:border-[1px] before:border-solid before:h-full"
          >
            <div>
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <h4 className="font-bold">{item.title}</h4>
              </div>
              <div className="ml-5">
                <p className=" italic text-sm">{item.place}</p>
                {item.description.length > 0 && <Description data={item.description} />}
                <div
                  className={cx("flex items-center", {
                    "pb-10": data.length != index + 1
                  })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="calendar-alt"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fill="#20396F"
                      d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
                    ></path>
                  </svg>
                  <span className="text-sm">{item.years}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
