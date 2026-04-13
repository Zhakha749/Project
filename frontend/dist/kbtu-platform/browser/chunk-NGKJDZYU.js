import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/admin`;
  }
  getStats() {
    return this.http.get(`${this.base}/stats/`);
  }
  getPendingMaterials() {
    return this.http.get(`${this.base}/moderation/materials/`);
  }
  approveMaterial(id) {
    return this.http.post(`${this.base}/moderation/materials/${id}/`, { action: "approve" });
  }
  rejectMaterial(id) {
    return this.http.post(`${this.base}/moderation/materials/${id}/`, { action: "reject" });
  }
  getOpenReports() {
    return this.http.get(`${this.base}/moderation/reports/`);
  }
  resolveReport(id, action) {
    return this.http.post(`${this.base}/moderation/reports/${id}/`, { action });
  }
  massSyllabus(formData) {
    return this.http.post(`${this.base}/mass-assign-syllabus/`, formData);
  }
  static {
    this.\u0275fac = function AdminService_Factory(t) {
      return new (t || _AdminService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminService
};
//# sourceMappingURL=chunk-NGKJDZYU.js.map
