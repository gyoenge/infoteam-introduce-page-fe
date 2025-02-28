import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 30%, 0)";
      case "down":
        return "translate3d(0, -30%, 0)";
      case "left":
        return "translate3d(15%, 0, 0)";
      case "right":
        return "translate3d(-10%, 0, 0)";
      case "leftUp":
        return "translate3d(3%, 10%, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "opacity, transform";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5,
        margin: "0px 50px 0px 0px",
      });
      observer.observe(current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

const useScrollZoom = (direction = "in", duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "in":
        return "90%";
      case "out":
        return "110%";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "opacity, width, height";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.width = "100%";
        current.style.height = "100%";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.5,
        margin: "0px 50px 0px 0px",
      });
      observer.observe(current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      width: handleDirection(direction),
      height: handleDirection(direction),
    },
  };
};

export { useScrollFadeIn, useScrollZoom };
