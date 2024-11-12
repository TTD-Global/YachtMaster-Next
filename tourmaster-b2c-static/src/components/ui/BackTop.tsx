"use client";
import { BackTopProps, FloatButton } from "antd";
import { FC } from "react";
interface BackTopComponent extends BackTopProps {
  className?: string;
}

const BackTop: FC<BackTopComponent> = ({ className }) => {
  return <FloatButton.BackTop className={`${className}`} />;
};

export default BackTop;
