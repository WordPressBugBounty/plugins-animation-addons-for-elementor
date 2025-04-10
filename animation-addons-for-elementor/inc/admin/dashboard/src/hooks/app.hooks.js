import { AppContext } from "@/context/app.context";
import { useContext } from "react";

export const useWidgets = () => {
  const {
    mainState: { allWidgets },
    setAllWidgets,
  } = useContext(AppContext);
  return { allWidgets, setAllWidgets };
};

export const useExtensions = () => {
  const {
    mainState: { allExtensions },
    setAllExtensions,
  } = useContext(AppContext);
  return { allExtensions, setAllExtensions };
};

export const useActiveItem = () => {
  const {
    updateActiveWidget,
    updateActiveGroupWidget,
    updateActiveFullWidget,
    updateActiveGeneralExtension,
    updateActiveGeneralGroupExtension,
    updateActiveGsapExtension,
    updateActiveGsapGroupExtension,
    updateActiveGsapAllExtension,
    updateActiveFullExtension,
  } = useContext(AppContext);
  return {
    updateActiveWidget,
    updateActiveGroupWidget,
    updateActiveFullWidget,
    updateActiveGeneralExtension,
    updateActiveGeneralGroupExtension,
    updateActiveGsapExtension,
    updateActiveGsapGroupExtension,
    updateActiveGsapAllExtension,
    updateActiveFullExtension,
  };
};

export const useActivate = () => {
  const {
    mainState: { activated },
    setActivated,
  } = useContext(AppContext);
  return { activated, setActivated };
};

export const useSetup = () => {
  const {
    mainState: { setupType },
    setSetupType,
  } = useContext(AppContext);
  return { setupType, setSetupType };
};

export const useNotification = () => {
  const {
    mainState: { notice, changelog },
    setNotice,
    updateNotice,
    setChangelog,
  } = useContext(AppContext);
  return { notice, changelog, setNotice, updateNotice, setChangelog };
};

export const useTNavigation = () => {
  const {
    mainState: { tabKey },
    setTabKey,
  } = useContext(AppContext);

  return { tabKey, setTabKey };
};

export const useSkip = () => {
  const {
    mainState: { isSkipTerms },
    setIsSkipTerms,
  } = useContext(AppContext);
  return { isSkipTerms, setIsSkipTerms };
};

export const useLibrary = () => {
  const {
    mainState: { allLibrary },
    updateLibrary,
    updateActiveGroupLibrary,
  } = useContext(AppContext);
  return { allLibrary, updateLibrary, updateActiveGroupLibrary };
};
