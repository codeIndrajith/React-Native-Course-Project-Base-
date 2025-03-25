import { Stack } from "expo-router";
import React from "react";

const NoteLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default NoteLayout;
