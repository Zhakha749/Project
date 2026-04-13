import {
  CommonModule,
  DecimalPipe,
  InputFlags,
  computed,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-FJ3HNCAF.js";

// src/app/shared/components/rating-badge/rating-badge.component.ts
var RatingBadgeComponent = class _RatingBadgeComponent {
  constructor() {
    this.value = input.required();
    this.badgeClass = computed(() => {
      const v = this.value();
      if (v >= 8)
        return "badge badge-high";
      if (v >= 5)
        return "badge badge-mid";
      return "badge badge-low";
    });
  }
  static {
    this.\u0275fac = function RatingBadgeComponent_Factory(t) {
      return new (t || _RatingBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RatingBadgeComponent, selectors: [["app-rating-badge"]], inputs: { value: [InputFlags.SignalBased, "value"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 6, consts: [[1, "badge"]], template: function RatingBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "number");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.badgeClass());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 3, ctx.value(), "1.1-1"), " ");
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 44px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: .9rem;\n}\n.badge-high[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-mid[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge-low[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge-high[_ngcontent-%COMP%] {\n  background: #1b3a1f;\n  color: #81c784;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge-mid[_ngcontent-%COMP%] {\n  background: #3a2a00;\n  color: #ffb74d;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge-low[_ngcontent-%COMP%] {\n  background: #3a0a0a;\n  color: #ef9a9a;\n}\n/*# sourceMappingURL=rating-badge.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RatingBadgeComponent, { className: "RatingBadgeComponent", filePath: "src\\app\\shared\\components\\rating-badge\\rating-badge.component.ts", lineNumber: 27 });
})();

export {
  RatingBadgeComponent
};
//# sourceMappingURL=chunk-HSY2CFWJ.js.map
