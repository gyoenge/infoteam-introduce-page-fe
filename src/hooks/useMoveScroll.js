import { useRef, useEffect } from "react";

function useMoveScroll() {
  const element = useRef(); // useRef < HTMLDivElement > null

  const onMoveToElement = () => {
    if (element) {
      element.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { element, onMoveToElement };
}

export default useMoveScroll;
