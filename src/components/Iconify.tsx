import { cn } from "@/lib/utils";
import { Icon, type IconifyIcon, type IconifyIconProps } from "@iconify/react";
import { cva } from "class-variance-authority";

type PartialIconify = Partial<
  Omit<IconifyIconProps, "icon" | "width" | "height" | "onLoad">
>;
type PartialSVG = Partial<Omit<React.SVGProps<SVGSVGElement>, "onLoad">>;

type IconifyProps = PartialIconify &
  PartialSVG & {
    icon: IconifyIcon | string;
    size?: number;
    variant?: "sm" | "md" | "lg";
  };

const iconVariants = cva("", {
  variants: {
    variant: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "md",
  },
});

const Iconify = ({
  icon,
  size = 20,
  variant,
  className,
  ...props
}: IconifyProps) => {
  const classes = variant ? iconVariants({ variant }) : undefined;
  const width = variant ? undefined : size;
  const height = variant ? undefined : size;

  return (
    <Icon
      icon={icon}
      className={cn(classes, className)}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Iconify;
