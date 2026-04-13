import {
  MatChipsModule
} from "./chunk-7US2R33H.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TNDBW4LG.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-FT2AHD6T.js";
import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  InputFlags,
  MatIcon,
  MatIconModule,
  inject,
  input,
  output,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FJ3HNCAF.js";

// src/app/core/services/review.service.ts
var ReviewService = class _ReviewService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/reviews`;
  }
  create(payload) {
    return this.http.post(`${this.base}/`, payload);
  }
  vote(id, vote) {
    return this.http.post(`${this.base}/${id}/vote/`, { vote });
  }
  report(id, reason) {
    return this.http.post(`${this.base}/${id}/report/`, { reason });
  }
  static {
    this.\u0275fac = function ReviewService_Factory(t) {
      return new (t || _ReviewService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/components/review-card/review-card.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _c0 = (a0) => ({ label: "Clarity", v: a0 });
var _c1 = (a0) => ({ label: "Objectivity", v: a0 });
var _c2 = (a0) => ({ label: "Accessibility", v: a0 });
var _c3 = (a0) => ({ label: "Workload", v: a0 });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReviewCardComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5)(1, "mat-icon");
    \u0275\u0275text(2, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verified student ");
    \u0275\u0275elementEnd();
  }
}
function ReviewCardComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275element(4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r1.v / 10 * 100 + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.v);
  }
}
function ReviewCardComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon");
    \u0275\u0275text(2, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Student reported gender bias concerns");
    \u0275\u0275elementEnd()();
  }
}
function ReviewCardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ReviewCardComponent_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reportClicked.emit());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Report ");
    \u0275\u0275elementEnd();
  }
}
var ReviewCardComponent = class _ReviewCardComponent {
  constructor() {
    this.review = input.required();
    this.canVote = input(false);
    this.canReport = input(false);
    this.voteClicked = output();
    this.reportClicked = output();
  }
  getRatingClass(r) {
    if (r >= 8)
      return "rating-high";
    if (r >= 5)
      return "rating-mid";
    return "rating-low";
  }
  static {
    this.\u0275fac = function ReviewCardComponent_Factory(t) {
      return new (t || _ReviewCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReviewCardComponent, selectors: [["app-review-card"]], inputs: { review: [InputFlags.SignalBased, "review"], canVote: [InputFlags.SignalBased, "canVote"], canReport: [InputFlags.SignalBased, "canReport"] }, outputs: { voteClicked: "voteClicked", reportClicked: "reportClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 29, consts: [[1, "rcard", "card"], [1, "rcard__header"], [1, "rcard__meta"], [1, "rcard__author"], [1, "rcard__avatar-icon"], [1, "rcard__badge", "rcard__badge--verified"], [1, "text-muted", "rcard__date"], [1, "rcard__scores"], [1, "rcard__score"], [1, "rcard__score", "text-muted"], [1, "rcard__text"], [1, "rcard__subratings"], [1, "rcard__subrating"], [1, "rcard__marker"], [1, "rcard__footer"], [1, "rcard__votes"], [1, "text-muted"], ["mat-icon-button", "", "matTooltip", "Mark as helpful", 3, "click", "disabled"], [1, "rcard__vote-count"], ["mat-icon-button", "", "matTooltip", "Not helpful", 3, "click", "disabled"], ["mat-button", "", "color", "warn", 1, "rcard__report"], [1, "rcard__subbar"], [1, "rcard__subbar-fill"], ["mat-button", "", "color", "warn", 1, "rcard__report", 3, "click"]], template: function ReviewCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "mat-icon", 4);
        \u0275\u0275text(5, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ReviewCardComponent_Conditional_7_Template, 4, 0, "span", 5);
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7)(12, "span", 8)(13, "mat-icon");
        \u0275\u0275text(14, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 9)(17, "mat-icon");
        \u0275\u0275text(18, "fitness_center");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "p", 10);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275repeaterCreate(23, ReviewCardComponent_For_24_Template, 7, 4, "div", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, ReviewCardComponent_Conditional_25_Template, 5, 0, "div", 13);
        \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "span", 16);
        \u0275\u0275text(29, "Helpful?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 17);
        \u0275\u0275listener("click", function ReviewCardComponent_Template_button_click_30_listener() {
          return ctx.voteClicked.emit("up");
        });
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "thumb_up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "span", 18);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275listener("click", function ReviewCardComponent_Template_button_click_35_listener() {
          return ctx.voteClicked.emit("down");
        });
        \u0275\u0275elementStart(36, "mat-icon");
        \u0275\u0275text(37, "thumb_down");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, ReviewCardComponent_Conditional_38_Template, 4, 0, "button", 20);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.review().author_name, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.review().took_this_course ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, ctx.review().created_at, "mediumDate"));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.getRatingClass(ctx.review().rating));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.review().rating, "/10 ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" Diff ", ctx.review().difficulty_rating, "/10 ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.review().text);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pureFunction4(24, _c4, \u0275\u0275pureFunction1(16, _c0, ctx.review().clarity_rating), \u0275\u0275pureFunction1(18, _c1, ctx.review().objectivity_rating), \u0275\u0275pureFunction1(20, _c2, ctx.review().accessibility_rating), \u0275\u0275pureFunction1(22, _c3, ctx.review().workload_rating)));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(25, ctx.review().sensitive_markers.gender_bias ? 25 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", !ctx.canVote());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.review().helpful_votes);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.canVote());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(38, ctx.canReport() ? 38 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatTooltipModule, MatTooltip, MatChipsModule], styles: ["\n\n.rcard[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.rcard__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.rcard__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.rcard__author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.rcard__avatar-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n  color: var(--color-text-muted);\n}\n.rcard__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.rcard__badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  height: 13px;\n  width: 13px;\n}\n.rcard__badge--verified[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.dark-theme[_ngcontent-%COMP%]   .rcard__badge--verified[_ngcontent-%COMP%] {\n  background: #1b3a1f;\n  color: #81c784;\n}\n.rcard__date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.rcard__scores[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.rcard__score[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.rcard__score[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.rcard__text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: var(--color-text);\n}\n.rcard__subratings[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 6px 16px;\n}\n.rcard__subrating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.78rem;\n}\n.rcard__subrating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  width: 90px;\n  flex-shrink: 0;\n}\n.rcard__subrating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  width: 16px;\n  text-align: right;\n}\n.rcard__subbar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: var(--color-border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.rcard__subbar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  background: var(--color-primary);\n  transition: width 0.3s;\n}\n.rcard__marker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.82rem;\n  color: #e65100;\n  opacity: 0.7;\n}\n.rcard__marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.rcard__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid var(--color-border);\n  padding-top: 10px;\n  margin-top: 4px;\n}\n.rcard__votes[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n}\n.rcard__vote-count[_ngcontent-%COMP%] {\n  font-weight: 600;\n  min-width: 20px;\n  text-align: center;\n}\n.rcard__report[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=review-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReviewCardComponent, { className: "ReviewCardComponent", filePath: "src\\app\\shared\\components\\review-card\\review-card.component.ts", lineNumber: 16 });
})();

export {
  ReviewService,
  ReviewCardComponent
};
//# sourceMappingURL=chunk-MTWTBI5M.js.map
