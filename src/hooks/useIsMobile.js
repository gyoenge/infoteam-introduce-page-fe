import { useMediaQuery } from "react-responsive";

const MEDIA_QUERY_WIDTH_MOBILE_WIDTH = "900px"; // (768px보다 여유 둠)

const useIsMobile = () => {
  return useMediaQuery({
    query: "(max-width: " + MEDIA_QUERY_WIDTH_MOBILE_WIDTH + ")",
  });
};

export { useIsMobile, MEDIA_QUERY_WIDTH_MOBILE_WIDTH };
