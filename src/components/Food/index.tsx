import clsx from "clsx";
import { ComponentProps } from "react";

import { Box } from "../Typograph/Box";
import { Text } from "../Typograph/Text";
import { Touchable } from "../Typograph/Touchable";

type FoodRootProps = ComponentProps<typeof Touchable>;

function FoodRoot({ className, children, ...props }: FoodRootProps) {
  return (
    <Touchable
      className={clsx(
        "flex-row items-center justify-between h-12 w-full px-[10px] mt-2 border border-gray-5 rounded",
        className
      )}
      {...props}
    >
      {children}
    </Touchable>
  );
}

type FoodContentProps = ComponentProps<typeof Box>;

function FoodContent({ className, children, ...props }: FoodContentProps) {
  return (
    <Box
      className={clsx("flex-row items-center justify-start", className)}
      {...props}
    >
      {children}
    </Box>
  );
}

type FoodTimeProps = ComponentProps<typeof Text>;

function FoodTime({ className, children, ...props }: FoodTimeProps) {
  return (
    <Text className={clsx("text-xs text-gray-1 font-4", className)} {...props}>
      {children}
    </Text>
  );
}

type FoodSeparatorProps = ComponentProps<typeof Box>;

function FoodSeparator({ className, children, ...props }: FoodSeparatorProps) {
  return (
    <Box
      className={clsx("h-[14px] w-[1px] bg-gray-4 mx-3", className)}
      {...props}
    >
      {children}
    </Box>
  );
}

type FoodNameProps = ComponentProps<typeof Text>;

function FoodName({ className, children, ...props }: FoodNameProps) {
  return (
    <Text
      numberOfLines={1}
      className={clsx("font-4 text-base text-gray-2", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

type FoodTypeProps = ComponentProps<typeof Box> & {
  type: "bad" | "good";
};

function FoodType({ className, children, type, ...props }: FoodTypeProps) {
  return (
    <Box
      className={clsx(
        "h-[14px] w-[14px] rounded-full",
        {
          "bg-red-light": type === "bad",
          "bg-green-light": type === "good",
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  );
}

export const Food = {
  Root: FoodRoot,
  Content: FoodContent,
  Time: FoodTime,
  Separator: FoodSeparator,
  Name: FoodName,
  Type: FoodType,
};
