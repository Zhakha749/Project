import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  HttpClient,
  HttpParams,
  inject,
  ɵɵdefineInjectable
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/teacher.service.ts
var TeacherService = class _TeacherService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/teachers`;
  }
  getAll(filters = {}) {
    let params = new HttpParams();
    if (filters.search)
      params = params.set("search", filters.search);
    if (filters.age_range)
      params = params.set("age_range", filters.age_range);
    if (filters.subject)
      params = params.set("subject", filters.subject.toString());
    if (filters.ordering)
      params = params.set("ordering", filters.ordering);
    if (filters.page)
      params = params.set("page", filters.page.toString());
    return this.http.get(`${this.base}/`, { params });
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}/`);
  }
  getAverageRatings(id) {
    return this.http.get(`${this.base}/${id}/`);
  }
  static {
    this.\u0275fac = function TeacherService_Factory(t) {
      return new (t || _TeacherService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeacherService, factory: _TeacherService.\u0275fac, providedIn: "root" });
  }
};

export {
  TeacherService
};
//# sourceMappingURL=chunk-BKOIVKHD.js.map
