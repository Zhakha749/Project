import {
  BaseChartDirective
} from "./chunk-RJ2NYKHV.js";
import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  HttpClient,
  inject,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/course.service.ts
var CourseService = class _CourseService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/course-instances`;
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}/`);
  }
  compare(ids) {
    return this.http.get(`${this.base}/compare/`, {
      params: { ids: ids.join(",") }
    });
  }
  static {
    this.\u0275fac = function CourseService_Factory(t) {
      return new (t || _CourseService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/grade-chart/grade-chart.component.ts
var GRADE_LABELS = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F", "FX"];
var GRADE_COLOURS = [
  "#2e7d32",
  "#43a047",
  "#66bb6a",
  "#8bc34a",
  "#aed581",
  "#ffca28",
  "#ffa726",
  "#ff7043",
  "#e53935",
  "#c62828",
  "#880e4f",
  "#4a148c"
];
var GradeChartComponent = class _GradeChartComponent {
  constructor() {
    this.label = "Students";
    this.chartData = { labels: GRADE_LABELS, datasets: [] };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.parsed.y} student${ctx.parsed.y !== 1 ? "s" : ""}`
          }
        }
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
          title: { display: true, text: "Students" }
        }
      }
    };
  }
  ngOnChanges() {
    if (!this.distribution)
      return;
    const values = GRADE_LABELS.map((g) => this.distribution[g] ?? 0);
    this.chartData = {
      labels: GRADE_LABELS,
      datasets: [{
        label: this.label,
        data: values,
        backgroundColor: GRADE_COLOURS,
        borderRadius: 4,
        borderSkipped: false
      }]
    };
  }
  static {
    this.\u0275fac = function GradeChartComponent_Factory(t) {
      return new (t || _GradeChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradeChartComponent, selectors: [["app-grade-chart"]], inputs: { distribution: "distribution", label: "label" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [[1, "chart-wrap"], ["baseChart", "", "type", "bar", 3, "data", "options"]], template: function GradeChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "canvas", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.chartData)("options", ctx.chartOptions);
      }
    }, dependencies: [BaseChartDirective], styles: ["\n\n.chart-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 260px;\n}\n/*# sourceMappingURL=grade-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradeChartComponent, { className: "GradeChartComponent", filePath: "src\\app\\shared\\components\\grade-chart\\grade-chart.component.ts", lineNumber: 29 });
})();

export {
  CourseService,
  GradeChartComponent
};
//# sourceMappingURL=chunk-O6EJYQQQ.js.map
