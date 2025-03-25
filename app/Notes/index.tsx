import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface Note {
  id: number;
  text: string;
}

const NoteScreen: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      text: "Note one",
    },
    {
      id: 2,
      text: "Note two",
    },
    {
      id: 3,
      text: "Note three",
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item: Note) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  noteItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
  },
  noteText: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default NoteScreen;
