import Image from "next/image";
import cx from "classnames";

const Tag: React.FC<TagProps> = ({ img, alt, title, favorite }): React.ReactElement => (
  <div className="inline-flex mr-5">
    <Image src={img} alt={alt} className="mr-1 w-6 h-6" height={24} width={24} />
    <span className={cx({ "font-bold": favorite, "font-normal": !favorite })}>{title}</span>
  </div>
);

export default Tag;
