import clsx from "clsx";
import { ComponentProps } from "react";
import { Text } from "../Typograph/Text";

import { Touchable } from "../Typograph/Touchable";

type CardRootProps = ComponentProps<typeof Touchable>;

function CardRoot({ children, className, ...props }: CardRootProps) {
  return (
    <Touchable
      className={clsx("items-center justify-center rounded-lg p-4", className)}
      {...props}
    >
      {children}
    </Touchable>
  );
}

type CardTitleProps = ComponentProps<typeof Text>;

function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <Text className={clsx("text-gray-1 font-7", className)} {...props}>
      {children}
    </Text>
  );
}

type CardDescriptionProps = ComponentProps<typeof Text>;

function CardDescription({
  className,
  children,
  ...props
}: CardDescriptionProps) {
  return (
    <Text className={clsx("text-sm text-gray-2 font-4", className)} {...props}>
      {children}
    </Text>
  );
}

export const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
};
