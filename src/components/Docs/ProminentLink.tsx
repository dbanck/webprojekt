import React from "react";

const ProminentLink = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <a href={link} target="_blank" className="prominent-link">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{children}</span>
    </a>
  );
};

export default ProminentLink;
