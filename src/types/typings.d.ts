interface CvHeader {
  path: string;
  name: string;
}
interface InfoHeader {
  name: string;
  id: string;
  d: string;
}

interface InfoLink {
  href: string;
  title: string;
  target: string;
}

interface Info {
  header: InfoHeader;
  link: InfoLink;
}
interface NavLinks {
  href: string;
  name: string;
}

interface TimelineItem {
  title: string;
  place: string;
  description: string[];
  years: string;
}

interface Training {
  education: TimelineItem[];
  work: TimelineItem[];
}

interface Parents {
  pathAlt: string;
  title: string;
  favorite: boolean;
}

interface Skill {
  parents: Parents[];
  score: number;
  children?: Skill[];
}
interface SkillItems {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
  cloudService: Skill[];
}
interface SkillContentProps {
  svgId: string;
  title: string;
  items: Skill[];
  d: string;
}
interface SkillElementProps {
  data: Skill[];
}
interface SkillItemProps {
  data: Parents[];
}
interface NavigationsProps {
  navigationElement: RefObject<HTMLDivElement>;
}

interface SectionProps {
  sectionId: string;
  title: string;
  children: React.ReactElement;
}

interface TagProps {
  img: string;
  alt: string;
  title: string;
  favorite: boolean;
}
interface SubTitleProps {
  svgId: string;
  title: string;
  d: string;
}

interface TimelineItemProps {
  data: TimelineItem[];
  title: string;
  svgId: string;
  d: string;
}

interface DescriptionProps {
  data: string[];
}

interface InputErrorIconProps {
  inputType: string;
}

interface Input {
  nameId: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  label?: string;
  children?: React.ReactElement;
  errorMessage?: string;
  disabled?: boolean;
  error?: boolean;
  onBlur?: (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputProps extends Input {
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextareaProps extends Input {}

interface ButtonProps {
  type: "submit" | "button";
  value: string;
  isSubmitting?: boolean;
  actionBtn?: string;
  handleClick?(): void;
}

interface ContactForm {
  fullName: string;
  subject: string;
  email: string;
  project: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "swiper-container": any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "swiper-slide": any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "aria-label": any;
  }
}
