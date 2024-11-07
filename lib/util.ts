import { signInAnon } from "@/app/actions/auth";

function getToken() {
  return window.localStorage.getItem("token");
}

function setToken(token: string) {
  window.localStorage.setItem("token", token);
}

export async function syncUser() {
  const currentToken = getToken();
  const { token } = await signInAnon(currentToken);
  if (currentToken !== token) {
    setToken(token);
  }
  return token;
}
