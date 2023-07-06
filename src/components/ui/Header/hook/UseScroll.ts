import { RefObject, useEffect, useState, MouseEvent, SetStateAction, Dispatch } from "react";

const useScroll = (
  navigationElement: RefObject<HTMLDivElement>,
  setShowMenu: Dispatch<SetStateAction<boolean>>,
  navLinks: NavLinks[],
  pageYOffset: number
) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleClick = (event: MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    const target = event.target as HTMLAnchorElement;
    const sectionId = target.hash.split("#")[1];

    if (sectionId) {
      if (!document.getElementById(sectionId)) {
        console.warn(`There is no element with id ${sectionId} present in the DOM`);
        return;
      }

      // ? returns the height of the view current
      const positionOffsetTop: number = document.getElementById(sectionId)?.offsetTop as number;

      // ? returns the height of the header
      // const scrollHeight: number = navigationElement.current?.scrollHeight as number;
      const scrollTargetPosition = positionOffsetTop - 64;
      setShowMenu(false);

      window.scrollTo({ top: scrollTargetPosition + pageYOffset, left: 0, behavior: "smooth" });
    } else {
      console.warn(`There is no element with id ${sectionId} present in the DOM`);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    setScrollPosition(window.scrollY);

    const scrollTargets = navLinks.map((item: NavLinks) => item.href.split("#")[1]);

    scrollTargets.forEach((sectionId: string) => {
      const documentSectionId = document.getElementById(sectionId);
      const element = document.querySelector<HTMLElement>(`a[href='#${sectionId}']`) as HTMLElement;

      if (element) {
        element.classList.remove("is-active");

        if (!documentSectionId) {
          console.warn(`There is no element with id ${sectionId} present in the DOM`);
          return;
        }

        // ? returns the height of the header
        const scrollHeight: number = navigationElement.current?.scrollHeight as number;
        const scrollSectionOffsetTop: number = documentSectionId.offsetTop - scrollHeight;
        const pageOffSet: number = window.pageYOffset - pageYOffset;
        const scrollOffsetTopHeight: number = scrollSectionOffsetTop + documentSectionId.scrollHeight;

        if (window.scrollY < scrollOffsetTopHeight) {
          if (pageOffSet >= scrollSectionOffsetTop) {
            element.classList.add("is-active");
          }
        }
      }
    });
  };

  // * it change the header position when it detect handle scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => window.removeEventListener("scroll", handleScroll, false);
  });

  return { scrollPosition, handleClick };
};

export { useScroll };
