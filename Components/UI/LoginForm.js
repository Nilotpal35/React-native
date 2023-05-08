import { View, Text, Pressable, TextInput } from "react-native";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  valiateLogin,
  navigation,
  styles,
}) {
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.formContainer}>
        {/* <LinearGradient
            colors={[GlobalStyles.lightBlue, GlobalStyles.teal]}
            style={{ paddingVertical: 30 }}
          > */}
        <View style={styles.emailPwdContainer}>
          <Text style={styles.emailPwd}>Email</Text>
          <TextInput
            style={styles.emailPwdInput}
            placeholder="Email Id"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.emailPwdContainer}>
          <Text style={styles.emailPwd}>Password</Text>
          <TextInput
            style={styles.emailPwdInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={valiateLogin}
          />
        </View>
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.55 } : null)}
          onPress={valiateLogin}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.55 } : null)}
          onPress={async () => {
            await navigation.replace("SIGNUP");
          }}
        >
          <Text style={styles.linkText}>Create a new Account?</Text>
        </Pressable>
        {/* </LinearGradient> */}
      </View>
    </View>
  );
}
