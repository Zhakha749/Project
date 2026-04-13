import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-T2DY3HHO.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵstyleProp
} from "./chunk-FJ3HNCAF.js";

// src/app/shared/components/loading-spinner/loading-spinner.component.ts
var LoadingSpinnerComponent = class _LoadingSpinnerComponent {
  constructor() {
    this.diameter = 48;
    this.minHeight = "200px";
  }
  static {
    this.\u0275fac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || _LoadingSpinnerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], inputs: { diameter: "diameter", minHeight: "minHeight" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "spinner-wrap"], [3, "diameter"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "mat-spinner", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("min-height", ctx.minHeight);
        \u0275\u0275advance();
        \u0275\u0275property("diameter", ctx.diameter);
      }
    }, dependencies: [MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.spinner-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=loading-spinner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingSpinnerComponent, { className: "LoadingSpinnerComponent", filePath: "src\\app\\shared\\components\\loading-spinner\\loading-spinner.component.ts", lineNumber: 15 });
})();

export {
  LoadingSpinnerComponent
};
//# sourceMappingURL=chunk-2IBP76E2.js.map
