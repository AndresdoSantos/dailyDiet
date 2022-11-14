import { ComponentProps } from "react";
import clsx from "clsx";

import { Box } from "../Typograph/Box";
import { Text } from "../Typograph/Text";
import { Touchable } from "../Typograph/Touchable";

type ButtonRootProps = ComponentProps<typeof Touchable>;

function ButtonRoot({ children, className, ...props }: ButtonRootProps) {
  return (
    <Touchable
      className={clsx(
        "flex-row items-center justify-center rounded-md bg-gray-2 h-[50px]",
        className
      )}
      {...props}
    >
      {children}
    </Touchable>
  );
}

type ButtonIconProps = ComponentProps<typeof Box>;

function ButtonIcon({ children, ...props }: ButtonIconProps) {
  return (
    <Box className="mr-3" {...props}>
      {children}
    </Box>
  );
}

type ButtonTitleProps = ComponentProps<typeof Text>;

function ButtonTitle({ children, className, ...props }: ButtonTitleProps) {
  return (
    <Text
      className={clsx("text-white text-sm font-7", {}, className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Title: ButtonTitle,
};
