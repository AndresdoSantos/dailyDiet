import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { tw } from "../../lib/tailwind";

type TouchableProps = TouchableOpacityProps & {
  className?: string;
};

export function Touchable({ className, children, ...props }: TouchableProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={tw`${className}`} {...props}>
      {children}
    </TouchableOpacity>
  );
}
