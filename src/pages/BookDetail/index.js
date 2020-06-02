import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

const BookDetail = ({ navigation }) => {
  const bookToEdit = navigation.getParam("book", {
    title: "",
    description: "",
    read: false,
    photo: "",
  });

  const isEdit = navigation.getParam("isEdit", false);

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState(bookToEdit.title);
  const [description, setDescription] = useState(bookToEdit.description);
  const [read, setRead] = useState(bookToEdit.read);
  const [photo, setPhoto] = useState(bookToEdit.photo);

  useEffect(() => {
    AsyncStorage.getItem("books").then((data) => {
      if (data) {
        const book = JSON.parse(data);
        setBooks(book);
      }
    });
  }, []);

  const isValid = () => {
    if (title) {
      return true;
    }

    return false;
  };

  const handleSave = async () => {
    if (isValid()) {
      if (isEdit) {
        let newBooks = books;

        newBooks.map((item) => {
          if (item.id === bookToEdit.id) {
            item.title = title;
            item.description = description;
            item.read = read;
            item.photo = photo;
          }
          return item;
        });

        await AsyncStorage.setItem("books", JSON.stringify(newBooks));
      } else {
        const id = Math.random(5000).toString();
        const data = {
          id,
          title,
          description,
          photo,
        };

        books.push(data);

        await AsyncStorage.setItem("books", JSON.stringify(books));
      }

      navigation.goBack();
    } else {
      console.log("Dados inválidos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro</Text>

      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(description) => {
          setDescription(description);
        }}
      />

      <TouchableOpacity onPress={handleSave} style={styles.cameraButton}>
        <Icon name="photo-camera" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.saveButton, !isValid() ? styles.invalidSaveButton : ""]}
        onPress={handleSave}
      >
        <Text style={styles.saveButtonText}>
          {isEdit ? "Editar" : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetail;
