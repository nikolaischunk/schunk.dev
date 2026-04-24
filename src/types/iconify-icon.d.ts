import type * as React from "react";

export {};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        inline?: boolean | string;
        width?: string | number;
        height?: string | number;
        rotate?: string | number;
        flip?: string;
      };
    }
  }
}

