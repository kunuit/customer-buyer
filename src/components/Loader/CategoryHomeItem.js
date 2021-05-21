import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = ({ key, ...props }) => (
  <ContentLoader
    key={key}
    style={{ flex: 1 }}
    speed={1}
    width={200}
    height={100}
    viewBox="0 0 150 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="0" rx="0" ry="0" width="350" height="217" />
  </ContentLoader>
);

export default MyLoader;
