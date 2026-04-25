import { useContext } from "react";
import { useEffect } from "react";

import { SectionContext } from "@/CurrentSectionProvider";

export const useScrollSection = ({
  sectionName,
  ref,
}: {
  sectionName: string;
  ref: React.RefObject<HTMLElement | null>;
}) => {
  const { setCurrentSection, canUpdateFromScroll } =
    useContext(SectionContext)!;

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        if (canUpdateFromScroll()) {
          setCurrentSection(sectionName);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-72px 0px -45% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [canUpdateFromScroll, ref, sectionName, setCurrentSection]);
};
