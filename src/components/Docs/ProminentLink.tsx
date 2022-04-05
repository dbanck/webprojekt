import React from "react";

const ProminentLink = ({
  children,
  link,
  style,
}: {
  children: React.ReactNode;
  link: string;
  style: any;
}) => {
  return (
    <a href={link} target="_blank" className="prominent-link" style={style}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{children}</span>
    </a>
  );
};

export default ProminentLink;
