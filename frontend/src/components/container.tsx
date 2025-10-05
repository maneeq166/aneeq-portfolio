import React from "react";
import { cn } from "@/app/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "min-w-[896px] mx-auto md:p-5 dark:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
};
