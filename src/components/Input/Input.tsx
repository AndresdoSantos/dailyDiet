import clsx from "clsx";
import { ComponentProps } from "react";
import { TextInput, TextInputProps } from "react-native";

import { tw } from "../../lib/tailwind";

import { Box } from "../Typograph/Box";
import { Text } from "../Typograph/Text";

type InputRootProps = ComponentProps<typeof Box>;

function InputRoot({ children, className, ...props }: InputRootProps) {
  return (
    <Box
      className={clsx("flex flex-col justify-start w-full mb-6", {}, className)}
      {...props}
    >
      {children}
    </Box>
  );
}

type InputLabelProps = ComponentProps<typeof Text>;

function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <Text className="font-7 text-sm mb-1" {...props}>
      {children}
    </Text>
  );
}

type InputBoxProps = TextInputProps & {
  className?: string;
};

function InputBox({ children, className, ...props }: InputBoxProps) {
  return (
    <Box
      className={clsx(
        "border rounded-[6px] border-gray-5  min-h-[48px]",
        {},
        className
      )}
    >
      <TextInput style={tw`p-[14px] flex-1 font-4 text-gray-1`} {...props} />
    </Box>
  );
}

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Box: InputBox,
};
