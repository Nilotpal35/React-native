import {
  View,
  Pressable,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  formValidation,
  styles,
  navigation,
}) {
  return (
    <>
      <View>
        <Text
          style={[
            styles.text,
            { marginBottom: 50, fontSize: 30, fontWeight: 500 },
          ]}
        >
          LOGIN
        </Text>
      </View>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.formContainer}>
          <View>
            <Text
              style={[
                styles.text,
                { marginTop: 30, fontSize: 15, fontWeight: 500 },
              ]}
            >
              Email Address
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              autoComplete="off"
              autoCapitalize="none"
              keyboardAppearance="dark"
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 15, fontWeight: 500 }]}>
              Password
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                secureTextEntry
                placeholder="Password"
                autoComplete="off"
                autoCapitalize="none"
                keyboardAppearance="dark"
                onChangeText={setPassword}
                onSubmitEditing={formValidation}
              />
            </View>
          </View>
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.45 } : null)}
            onPress={formValidation}
          >
            <View style={styles.button}>
              <Text style={[styles.text, { fontSize: 14, fontWeight: 500 }]}>
                Log In
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.45 } : null)}
            onPress={(e) => {
              navigation.navigate("SIGNUP");
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  marginBottom: 30,
                  fontSize: 15,
                  fontWeight: 400,
                },
              ]}
            >
              Create a new account ?
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
