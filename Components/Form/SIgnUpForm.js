import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";

export default function SignUpForm({
  email,
  cnfEmail,
  password,
  cnfPassword,
  setEmail,
  setCnfEmail,
  setPassword,
  setCnfPassword,
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
          SIGNUP
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
              Confirm Email Address
            </Text>
            <TextInput
              style={styles.input}
              value={cnfEmail}
              placeholder="Email"
              autoComplete="off"
              autoCapitalize="none"
              keyboardAppearance="dark"
              onChangeText={setCnfEmail}
            />
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 15, fontWeight: 500 }]}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              placeholder="Password"
              autoComplete="off"
              autoCapitalize="none"
              keyboardAppearance="dark"
              passwordRules="required :  upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
              onChangeText={setPassword}
            />
          </View>
          <View>
            <Text style={[styles.text, { fontSize: 15, fontWeight: 500 }]}>
              Confirm Password
            </Text>
            <TextInput
              value={cnfPassword}
              style={styles.input}
              placeholder="Password"
              autoComplete="off"
              autoCapitalize="none"
              keyboardAppearance="dark"
              passwordRules="required :  upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
              onChangeText={setCnfPassword}
            />
          </View>

          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.45 } : null)}
            onPress={formValidation}
          >
            <View style={styles.button}>
              <Text style={[styles.text, { fontSize: 14, fontWeight: 500 }]}>
                Sign Up
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.45 } : null)}
            onPress={(e) => navigation.goBack()}
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
              Login instead ?
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
