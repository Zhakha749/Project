import {
  BaseChartDirective
} from "./chunk-RJ2NYKHV.js";
import {
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵstyleProp
} from "./chunk-FJ3HNCAF.js";

// src/app/shared/components/radar-chart/radar-chart.component.ts
var RadarChartComponent = class _RadarChartComponent {
  constructor() {
    this.size = "300px";
    this.compareLabel = "Compared";
    this.primaryLabel = "This teacher";
    this.chartData = { labels: [], datasets: [] };
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: { stepSize: 2, font: { size: 10 } },
          pointLabels: { font: { size: 12, weight: "bold" } },
          grid: { color: "rgba(128,128,128,0.2)" }
        }
      },
      plugins: {
        legend: { position: "bottom", labels: { font: { size: 11 } } }
      }
    };
  }
  ngOnChanges(changes) {
    if (changes["ratings"] || changes["compareRatings"]) {
      this.buildChart();
    }
  }
  buildChart() {
    if (!this.ratings)
      return;
    const labels = ["Clarity", "Objectivity", "Accessibility", "Workload"];
    const primary = [
      this.ratings.clarity,
      this.ratings.objectivity,
      this.ratings.accessibility,
      this.ratings.workload
    ];
    const datasets = [
      {
        label: this.primaryLabel,
        data: primary,
        backgroundColor: "rgba(57,73,171,0.15)",
        borderColor: "rgba(57,73,171,0.9)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(57,73,171,1)",
        pointRadius: 4
      }
    ];
    if (this.compareRatings) {
      datasets.push({
        label: this.compareLabel,
        data: [
          this.compareRatings.clarity,
          this.compareRatings.objectivity,
          this.compareRatings.accessibility,
          this.compareRatings.workload
        ],
        backgroundColor: "rgba(245,124,0,0.15)",
        borderColor: "rgba(245,124,0,0.9)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(245,124,0,1)",
        pointRadius: 4
      });
    }
    this.chartData = { labels, datasets };
  }
  static {
    this.\u0275fac = function RadarChartComponent_Factory(t) {
      return new (t || _RadarChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadarChartComponent, selectors: [["app-radar-chart"]], inputs: { ratings: "ratings", size: "size", compareRatings: "compareRatings", compareLabel: "compareLabel", primaryLabel: "primaryLabel" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 6, consts: [[1, "radar-wrap"], ["baseChart", "", "type", "radar", 3, "data", "options"]], template: function RadarChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "canvas", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.size)("height", ctx.size);
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.chartData)("options", ctx.chartOptions);
      }
    }, dependencies: [BaseChartDirective], styles: ["\n\n.radar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=radar-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadarChartComponent, { className: "RadarChartComponent", filePath: "src\\app\\shared\\components\\radar-chart\\radar-chart.component.ts", lineNumber: 21 });
})();

export {
  RadarChartComponent
};
//# sourceMappingURL=chunk-RAM4OV2D.js.map
