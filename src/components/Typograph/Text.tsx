import { Text as RNText, TextProps as RNTextProps } from "react-native";

import { tw } from "../../lib/tailwind";

type TextProps = RNTextProps & {
  className?: string;
};

export function Text({ className, children, ...props }: TextProps) {
  return (
    <RNText style={tw`${className}`} {...props}>
      {children}
    </RNText>
  );
}
