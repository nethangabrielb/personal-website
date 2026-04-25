import { createContext, useCallback, useRef, useState } from "react";

type SectionContextType = {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  setSectionFromNav: (section: string) => void;
  canUpdateFromScroll: () => boolean;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState("Hero");
  const navScrollLockUntilRef = useRef(0);

  const setSectionFromNav = useCallback((section: string) => {
    setCurrentSection(section);
    navScrollLockUntilRef.current = Date.now() + 700;
  }, []);

  const canUpdateFromScroll = useCallback(() => {
    return Date.now() >= navScrollLockUntilRef.current;
  }, []);

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        setSectionFromNav,
        canUpdateFromScroll,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}
