import RequestUtil from "../utilities/RequestUtil";

export const fetchContentListing = ({ pageNumber }) => {
  const url = `/static/api/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`;
  return RequestUtil.GET({ url });
};
