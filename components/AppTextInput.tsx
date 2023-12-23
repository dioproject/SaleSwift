import {
  TextInput,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontWeight: "600",
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.gray,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.gray,
          shadowOffset: { width: 4, height: Spacing },
          shadowColor: Colors.gray,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};
  
export default AppTextInput;