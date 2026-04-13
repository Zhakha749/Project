import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  HttpClient,
  HttpParams,
  inject,
  ɵɵdefineInjectable
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/subject.service.ts
var SubjectService = class _SubjectService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/subjects`;
  }
  getAll(filters = {}) {
    let params = new HttpParams();
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.category)
      params = params.set("category", filters.category);
    if (filters.ordering)
      params = params.set("ordering", filters.ordering);
    if (filters.page)
      params = params.set("page", filters.page.toString());
    return this.http.get(`${this.base}/`, { params });
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}/`);
  }
  getDifficultyStats(id) {
    return this.http.get(`${this.base}/${id}/`);
  }
  static {
    this.\u0275fac = function SubjectService_Factory(t) {
      return new (t || _SubjectService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SubjectService, factory: _SubjectService.\u0275fac, providedIn: "root" });
  }
};

export {
  SubjectService
};
//# sourceMappingURL=chunk-DH32MYIY.js.map
