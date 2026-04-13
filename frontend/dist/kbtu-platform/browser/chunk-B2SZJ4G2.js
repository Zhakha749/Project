import {
  DifficultyBarComponent
} from "./chunk-EG4BVBL4.js";
import {
  CourseService,
  GradeChartComponent
} from "./chunk-O6EJYQQQ.js";
import {
  RadarChartComponent
} from "./chunk-RAM4OV2D.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-D7TE3KK3.js";
import "./chunk-RJ2NYKHV.js";
import {
  RatingBadgeComponent
} from "./chunk-HSY2CFWJ.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-T2DY3HHO.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-YA7HQQJ3.js";
import {
  MatAnchor,
  MatButtonModule
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  MatIcon,
  MatIconModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FJ3HNCAF.js";

// src/app/features/compare/compare.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/teachers", a0];
var _c1 = () => [];
var _c2 = (a0) => ["/course", a0];
function CompareComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function CompareComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function CompareComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "?ids=1,2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "). ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Only ", ctx_r0.courses().length, " course(s) found. Add a second ID via the Compare button on a course page (e.g. ");
  }
}
function CompareComponent_Conditional_11_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", c_r2.teacher.photo, \u0275\u0275sanitizeUrl)("alt", c_r2.teacher.full_name);
  }
}
function CompareComponent_Conditional_11_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function CompareComponent_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 18);
    \u0275\u0275template(2, CompareComponent_Conditional_11_For_3_Conditional_2_Template, 1, 2, "img", 19)(3, CompareComponent_Conditional_11_For_3_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(13, "app-rating-badge", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, c_r2.teacher.photo ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r2.subject.title);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, c_r2.teacher.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.teacher.full_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("cmp__badge cmp__badge--", c_r2.role.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.year_interval);
    \u0275\u0275advance();
    \u0275\u0275property("value", c_r2.average_ratings.overall);
  }
}
function CompareComponent_Conditional_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "app-rating-badge", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", c_r3.average_ratings.overall);
  }
}
function CompareComponent_Conditional_11_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "app-difficulty-bar", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", (tmp_11_0 = c_r4.average_ratings.difficulty) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : 0);
  }
}
function CompareComponent_Conditional_11_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_11_0 = c_r5.reviews) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : \u0275\u0275pureFunction0(1, _c1)).length);
  }
}
function CompareComponent_Conditional_11_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r6.grading_policy);
  }
}
function CompareComponent_Conditional_11_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Rating breakdown (overlaid)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275element(3, "app-radar-chart", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ratings", ctx_r0.courses()[0].average_ratings)("compareRatings", ctx_r0.courses()[1].average_ratings)("primaryLabel", ctx_r0.courses()[0].teacher.full_name)("compareLabel", ctx_r0.courses()[1].teacher.full_name);
  }
}
function CompareComponent_Conditional_11_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-grade-chart", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r7.teacher.full_name);
    \u0275\u0275advance();
    \u0275\u0275property("distribution", c_r7.grade_distribution);
  }
}
function CompareComponent_Conditional_11_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 28)(2, "mat-icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " View full course ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c2, c_r8.id));
  }
}
function CompareComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275repeaterCreate(2, CompareComponent_Conditional_11_For_3_Template, 14, 12, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-divider", 10);
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7, "Overall rating");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, CompareComponent_Conditional_11_For_9_Template, 2, 1, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 11)(11, "div", 12);
    \u0275\u0275text(12, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, CompareComponent_Conditional_11_For_14_Template, 2, 1, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
    \u0275\u0275text(17, "Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, CompareComponent_Conditional_11_For_19_Template, 2, 2, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "div", 12);
    \u0275\u0275text(22, "Grading policy");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(23, CompareComponent_Conditional_11_For_24_Template, 2, 1, "div", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "mat-divider", 10);
    \u0275\u0275template(26, CompareComponent_Conditional_11_Conditional_26_Template, 4, 4);
    \u0275\u0275elementStart(27, "div", 15);
    \u0275\u0275text(28, "Grade distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 16);
    \u0275\u0275repeaterCreate(30, CompareComponent_Conditional_11_For_31_Template, 4, 2, "div", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "mat-divider", 10);
    \u0275\u0275elementStart(33, "div", 7);
    \u0275\u0275element(34, "div", 8);
    \u0275\u0275repeaterCreate(35, CompareComponent_Conditional_11_For_36_Template, 5, 3, "div", 13, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(26, ctx_r0.courses().length >= 2 ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.courses());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.courses());
  }
}
var CompareComponent = class _CompareComponent {
  constructor() {
    this.svc = inject(CourseService);
    this.route = inject(ActivatedRoute);
    this.cdr = inject(ChangeDetectorRef);
    this.loading = signal(true);
    this.courses = signal([]);
    this.errorMsg = signal("");
  }
  ngOnInit() {
    const idsParam = this.route.snapshot.queryParamMap.get("ids") ?? "";
    const ids = idsParam.split(",").map(Number).filter((n) => n > 0);
    if (ids.length < 1) {
      this.errorMsg.set("No course IDs provided. Use ?ids=1,2 in the URL.");
      this.loading.set(false);
      return;
    }
    this.svc.compare(ids).subscribe({
      next: (courses) => {
        this.courses.set(courses);
        this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: () => {
        this.errorMsg.set("Could not load courses for comparison.");
        this.loading.set(false);
        this.cdr.markForCheck();
      }
    });
  }
  static {
    this.\u0275fac = function CompareComponent_Factory(t) {
      return new (t || _CompareComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareComponent, selectors: [["app-compare"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "cmp", "page-container"], [1, "cmp__nav"], ["mat-button", "", "routerLink", "/subjects"], [1, "cmp__heading"], [1, "cmp__spinner"], ["diameter", "48"], [1, "cmp__error"], [1, "cmp__grid"], [1, "cmp__label-col"], [1, "cmp__course-col", "card", "cmp__header-card"], [1, "cmp__divider"], [1, "cmp__grid", "cmp__stat-row"], [1, "cmp__label-col", "cmp__label"], [1, "cmp__course-col"], [1, "cmp__course-col", "cmp__policy", "text-muted"], [1, "cmp__section-title"], [1, "cmp__chart-grid"], [1, "card", "cmp__chart-card"], [1, "cmp__teacher-photo"], [3, "src", "alt"], [1, "cmp__course-title"], [1, "cmp__teacher-link", 3, "routerLink"], [1, "cmp__meta", "text-muted"], [3, "value"], [1, "cmp__radar-wrap", "card"], ["size", "320px", 3, "ratings", "compareRatings", "primaryLabel", "compareLabel"], [1, "cmp__chart-label"], [3, "distribution"], ["mat-stroked-button", "", 3, "routerLink"]], template: function CompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "mat-icon");
        \u0275\u0275text(4, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Back to subjects ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1", 3);
        \u0275\u0275text(7, "Compare courses");
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, CompareComponent_Conditional_8_Template, 2, 0, "div", 4)(9, CompareComponent_Conditional_9_Template, 5, 1)(10, CompareComponent_Conditional_10_Template, 8, 1)(11, CompareComponent_Conditional_11_Template, 37, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.loading() ? 8 : ctx.errorMsg() ? 9 : ctx.courses().length < 2 ? 10 : 11);
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatIconModule,
      MatIcon,
      MatDividerModule,
      MatDivider,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      GradeChartComponent,
      RadarChartComponent,
      RatingBadgeComponent,
      DifficultyBarComponent
    ], styles: ["\n\n.cmp[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 48px;\n}\n.cmp__nav[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.cmp__heading[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  margin: 0 0 24px;\n}\n.cmp__spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.cmp__error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  color: var(--color-text-muted);\n}\n.cmp__error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n}\n.cmp__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n  margin-bottom: 16px;\n  align-items: start;\n}\n.cmp__label-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cmp__label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.88rem;\n  color: var(--color-text-muted);\n}\n.cmp__course-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cmp__header-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  align-items: flex-start;\n  gap: 10px;\n}\n.cmp__teacher-photo[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: var(--color-surface-2);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cmp__teacher-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.cmp__teacher-photo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--color-text-muted);\n}\n.cmp__course-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  margin: 0;\n}\n.cmp__teacher-link[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--color-primary);\n  font-size: 0.9rem;\n}\n.cmp__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  font-size: 0.8rem;\n  flex-wrap: wrap;\n}\n.cmp__stat-row[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px solid var(--color-border);\n}\n.cmp__policy[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  line-height: 1.5;\n}\n.cmp__badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 2px 9px;\n  border-radius: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.cmp__badge--lecturer[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.cmp__badge--practice[_ngcontent-%COMP%] {\n  background: #e0f2f1;\n  color: #00796b;\n}\n.cmp__badge--labs[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.cmp__badge--all[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.cmp__section-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 20px 0 12px;\n}\n.cmp__radar-wrap[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 24px;\n}\n.cmp__chart-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.cmp__chart-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.cmp__chart-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  margin: 0 0 10px;\n}\n.cmp__divider[_ngcontent-%COMP%] {\n  margin: 20px 0 !important;\n}\n/*# sourceMappingURL=compare.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareComponent, { className: "CompareComponent", filePath: "src\\app\\features\\compare\\compare.component.ts", lineNumber: 27 });
})();
export {
  CompareComponent
};
//# sourceMappingURL=chunk-B2SZJ4G2.js.map
