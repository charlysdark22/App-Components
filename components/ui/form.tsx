import React from "react";
import { View, Text } from "react-native";
import { Input } from "@/components/ui/input";

interface FormProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export default function Form({
  label,
  placeholder,
  value,
  onChangeText,
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  ...rest
}: FormProps) {
  return (
    <View className={`relative mb-4 ${containerClassName}`}>
      {/* Label flotante dentro del input */}
      <Text
        className={`absolute left-3 top-2 z-10  text-gray-500  px-1 ${labelClassName}`}
      >
        {label}
      </Text>

      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className={`text-base p-3 pt-6 border text-gray-500 rounded ${inputClassName}`}
        {...rest}
      />
    </View>
  );
}