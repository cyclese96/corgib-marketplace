import { useCallback, useEffect, useState } from "react";

const useTabs = () => {
  const [currentTabIndex, setTabIndex] = useState(0);

  const handle = useCallback(
    (_currentTabIndex) => {
      setTabIndex(Number(_currentTabIndex));
    },
    [currentTabIndex]
  );

  return { changeTabIndex: handle, currentTabIndex };
};
export default useTabs;
