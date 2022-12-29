import Cookies from 'js-cookie'
import { verifyToken } from '@/api/user';

const tokenKey: string = 'JWT';

function getToken(): string | undefined {
  // return localStorage.getItem(tokenKey);
  return Cookies.get(tokenKey)
}
function setToken(token: string, expires: number=1): void {
  Cookies.set(tokenKey, token, { expires })
  // localStorage.setItem(tokenKey, token);
}
function removeToken(): void {
  Cookies.remove(tokenKey)
  // localStorage.removeItem(tokenKey);
}

async function isValidToken(): Promise<boolean | string> {
  const token = getToken()
  if (token) {
    try {
      await verifyToken({'token': token})
      return token
    } catch (e) {
      return false
    }
  } else {
    return false
  }
}

export { getToken, setToken, removeToken, isValidToken };
