import {
  Router
} from "./chunk-YA7HQQJ3.js";
import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  BehaviorSubject,
  HttpClient,
  inject,
  tap,
  ɵɵdefineInjectable
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.ACCESS_KEY = "kbtu_access";
    this.REFRESH_KEY = "kbtu_refresh";
    this._isLoggedIn$ = new BehaviorSubject(this.hasValidToken());
    this.isLoggedIn$ = this._isLoggedIn$.asObservable();
  }
  // ── Public API ─────────────────────────────────────────────────────────────
  register(username, email, password, password2) {
    return this.http.post(`${environment.apiUrl}/auth/register/`, {
      username,
      university_email: email,
      password,
      password2
    });
  }
  login(email, password) {
    return this.http.post(`${environment.apiUrl}/auth/login/`, {
      university_email: email,
      password
    }).pipe(tap((tokens) => this.storeTokens(tokens)));
  }
  refreshToken() {
    const refresh = this.getRefreshToken();
    return this.http.post(`${environment.apiUrl}/auth/refresh/`, { refresh }).pipe(tap((res) => localStorage.setItem(this.ACCESS_KEY, res.access)));
  }
  logout() {
    localStorage.removeItem(this.ACCESS_KEY);
    localStorage.removeItem(this.REFRESH_KEY);
    this._isLoggedIn$.next(false);
    this.router.navigate(["/login"]);
  }
  isLoggedIn() {
    return this.hasValidToken();
  }
  isAdmin() {
    const payload = this.decodeToken();
    return !!payload?.is_staff;
  }
  getAccessToken() {
    return localStorage.getItem(this.ACCESS_KEY);
  }
  getRefreshToken() {
    return localStorage.getItem(this.REFRESH_KEY);
  }
  getUserPayload() {
    return this.decodeToken();
  }
  // ── Private helpers ────────────────────────────────────────────────────────
  storeTokens(tokens) {
    localStorage.setItem(this.ACCESS_KEY, tokens.access);
    localStorage.setItem(this.REFRESH_KEY, tokens.refresh);
    this._isLoggedIn$.next(true);
  }
  hasValidToken() {
    const token = localStorage.getItem(this.ACCESS_KEY);
    if (!token)
      return false;
    const payload = this.decodeTokenStr(token);
    if (!payload)
      return false;
    return payload.exp * 1e3 > Date.now();
  }
  decodeToken() {
    const token = this.getAccessToken();
    return token ? this.decodeTokenStr(token) : null;
  }
  decodeTokenStr(token) {
    try {
      const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      return JSON.parse(atob(base64));
    } catch {
      return null;
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-HQ5XUSHA.js.map
