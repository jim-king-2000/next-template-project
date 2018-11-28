
export default class Auth {
  static isAuthenticated(cookies) {
    let expiresAt = cookies.get('expires_at');
    return new Date().getTime() < expiresAt;
  }
}