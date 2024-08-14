import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: TagName;
}

const typographyVariants = cva("text-gray-700, text-[#faf6ca]", {
  variants: {
    variant: {
      "display-lg":
        "font-poppins text-[40px] leading-[48px] md:text-[56px] md:leading-[64px]",
      "display-md":
        "font-poppins text-[36px] leading-[44px] md:text-[48px] md:leading-[56px]",
      "display-sm":
        "font-poppins text-[32px] leading-[40px] md:text-[40px] md:leading-[48px]",
      "headline-lg":
        "font-poppins text-[24px] leading-[32px] md:text-[36px] md:leading-[48px]",
      "headline-md":
        "font-poppins text-[20px] leading-[28px] md:text-[32px] md:leading-[40px]",
      "headline-sm":
        "font-poppins text-[20px] leading-[28px] md:text-[28px] md:leading-[36px]",
      "title-lg": "text-[18px] leading-[24px] md:text-[24px] md:leading-[32px]",
      "title-md": "text-[16px] leading-[24px] md:text-[20px] md:leading-[28px]",
      "title-sm": "text-[16px] leading-[24px] md:text-[18px] md:leading-[24px]",
      "body-lg": "text-[16px] leading-[24px] md:text-[18px] md:leading-[28px]",
      "body-md": "text-[14px] leading-[24px] md:text-[16px] md:leading-[24px]",
      "body-sm": "text-[12px] leading-[20px] md:text-[14px] md:leading-[20px]",
      "label-lg": "text-[14px] leading-[24px]",
      "label-md": "text-[12px] leading-[16px]",
      "label-sm": "text-[10px] leading-[16px]",
    },
    weight: {
      regular: "font-normal",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body-md",
    weight: "regular",
  },
});

const Typography = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, variant, weight, children, as, ...props }, ref) => {
    const Comp = as || "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
