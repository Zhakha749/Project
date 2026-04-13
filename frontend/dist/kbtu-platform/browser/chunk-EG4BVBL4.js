import {
  CommonModule,
  DecimalPipe,
  InputFlags,
  computed,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-FJ3HNCAF.js";

// src/app/shared/components/difficulty-bar/difficulty-bar.component.ts
var DifficultyBarComponent = class _DifficultyBarComponent {
  constructor() {
    this.value = input.required();
    this.max = input(10);
    this.fillWidth = computed(() => `${Math.min(this.value() / this.max() * 100, 100)}%`);
  }
  static {
    this.\u0275fac = function DifficultyBarComponent_Factory(t) {
      return new (t || _DifficultyBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DifficultyBarComponent, selectors: [["app-difficulty-bar"]], inputs: { value: [InputFlags.SignalBased, "value"], max: [InputFlags.SignalBased, "max"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 7, consts: [[1, "diff-bar"], [1, "diff-bar__track"], [1, "diff-bar__fill"], [1, "diff-bar__label"]], template: function DifficultyBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "number");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.fillWidth());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(5, 4, ctx.value(), "1.1-1"), "/", ctx.max(), "");
      }
    }, dependencies: [CommonModule, DecimalPipe], styles: ["\n\n.diff-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.diff-bar__track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--color-border);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.diff-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #43a047 0%,\n      #fb8c00 60%,\n      #e53935 100%);\n  transition: width .4s ease;\n}\n.diff-bar__label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n/*# sourceMappingURL=difficulty-bar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DifficultyBarComponent, { className: "DifficultyBarComponent", filePath: "src\\app\\shared\\components\\difficulty-bar\\difficulty-bar.component.ts", lineNumber: 30 });
})();

export {
  DifficultyBarComponent
};
//# sourceMappingURL=chunk-EG4BVBL4.js.map
