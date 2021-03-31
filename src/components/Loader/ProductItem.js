import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = (props) => (
  <ContentLoader
    style={{ flex: 1 }}
    speed={1}
    width={150}
    height={230}
    viewBox="0 0 150 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="12" y="120" rx="3" ry="3" width="120" height="6" />
    <Rect x="12" y="160" rx="3" ry="3" width="80" height="6" />
    <Rect x="0" y="0" rx="0" ry="0" width="150" height="101" />
    <Rect x="99" y="66" rx="0" ry="0" width="2" height="0" />
    <Circle cx="124" cy="162" r="17" />
    <Rect x="12" y="135" rx="3" ry="3" width="80" height="6" />
  </ContentLoader>
);

export default MyLoader;
