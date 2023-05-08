import axios from "axios";

const API_KEY = "AIzaSyDNV23bTv7HFSr8f3w34csHOdL4I4_NLJA";

async function authenticator(mode, email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticator("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticator("signInWithPassword", email, password);
}
