import React from "react";

interface Props {
  Icon: React.FC;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <>
      <Icon />
      <p>{title}</p>
    </>
  );
}

export default SidebarRow;
