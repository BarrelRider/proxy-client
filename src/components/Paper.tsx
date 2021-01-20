import React from "react";

const Paper: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <div className="mc-paper">{children}</div>
);

export default Paper;
