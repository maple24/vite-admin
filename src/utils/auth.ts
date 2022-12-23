const tokenKey: string = 'JWT-Token';

function getToken(): string | null {
  return localStorage.getItem(tokenKey);
}
function setToken(token: string): void {
  localStorage.setItem(tokenKey, token);
}
function removeToken() {
  localStorage.removeItem(tokenKey);
}

export { getToken, setToken, removeToken };
