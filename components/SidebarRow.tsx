import React from "react";

interface Props {
  Icon: any;
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
