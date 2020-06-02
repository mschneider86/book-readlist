import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

const BookList = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("books").then((data) => {
      const book = JSON.parse(data);
      console.log("book: " + JSON.stringify(book));
      setBooks(book);
    });
  }, []);

  const handleNewBook = () => {
    console.log("clicou");
    navigation.navigate("BookDetail");
  };

  const handleEditBook = (bookId) => {
    const bookToEdit = books.find((item) => item.id === bookId);
    navigation.navigate("BookDetail", { book: bookToEdit, isEdit: true });
  };

  const handleDeleteBook = async (bookId) => {
    const newBooks = books.filter((item) => item.id !== bookId);
    await AsyncStorage.setItem("books", JSON.stringify(newBooks));
    setBooks(newBooks);
  };

  const handleBookRead = async (bookId) => {
    const newBooks = books.map((item) => {
      if (item.id === bookId) {
        item.read = !item.read;
      }
      return item;
    });

    await AsyncStorage.setItem("books", JSON.stringify(newBooks));
    setBooks(newBooks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolBox}>
        <Text style={styles.title}>Lista de Leitura</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleNewBook}>
          <Icon name="add" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <TouchableOpacity
              onPress={() => handleBookRead(item.id)}
              style={styles.itemButton}
            >
              <Text style={[styles.itemText, item.read ? styles.itemRead : ""]}>
                {item.title}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleEditBook(item.id)}
              style={styles.editButton}
            >
              <Icon name="create" size={14} color="#2ecc71" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleDeleteBook(item.id)}
              style={styles.editButton}
            >
              <Icon name="delete" size={14} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default BookList;
