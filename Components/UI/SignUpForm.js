import { View, Text, Pressable, TextInput } from "react-native";

export default function SignUpForm({
  email,
  cnfEmail,
  setEmail,
  setCnfEmail,
  password,
  cnfpassword,
  setPassword,
  setCnfPassword,
  formValidate,
  styles,
  navigation,
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
          <Text style={styles.emailPwd}>Cofirm Email</Text>
          <TextInput
            style={styles.emailPwdInput}
            placeholder="Confirm Email Id"
            value={cnfEmail}
            onChangeText={setCnfEmail}
          />
        </View>
        <View style={styles.emailPwdContainer}>
          <Text style={styles.emailPwd}>Password</Text>
          <TextInput
            style={styles.emailPwdInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.emailPwdContainer}>
          <Text style={styles.emailPwd}>Confirm Password</Text>
          <TextInput
            style={styles.emailPwdInput}
            placeholder="Confirm Password"
            value={cnfpassword}
            onChangeText={setCnfPassword}
            onSubmitEditing={formValidate}
          />
        </View>
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.55 } : null)}
          onPress={formValidate}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => (pressed ? { opacity: 0.55 } : null)}
          onPress={() => {
            navigation.replace("LOGIN");
          }}
        >
          <Text style={styles.linkText}>Go back to log in?</Text>
        </Pressable>
        {/* </LinearGradient> */}
      </View>
    </View>
  );
}
