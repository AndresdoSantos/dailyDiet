import { View, ViewProps } from "react-native";

import { tw } from "../../lib/tailwind";

type BoxProps = ViewProps & {
  className?: string;
};

export function Box({ className, children, ...props }: BoxProps) {
  return (
    <View style={tw`${className}`} {...props}>
      {children}
    </View>
  );
}
