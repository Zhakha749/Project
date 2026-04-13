import {
  TeacherService
} from "./chunk-BKOIVKHD.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ILETYXIB.js";
import {
  SubjectService
} from "./chunk-DH32MYIY.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-JWFEWHSN.js";
import {
  MatChipsModule
} from "./chunk-7US2R33H.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-FX3ROL5W.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-K7F7UP3I.js";
import {
  LoadingSpinnerComponent
} from "./chunk-2IBP76E2.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TNDBW4LG.js";
import "./chunk-24U2LF5Q.js";
import "./chunk-Y3OEKMN4.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-BYL5JOIU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-DDA5LCZW.js";
import "./chunk-PKU3V226.js";
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
import "./chunk-T2DY3HHO.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-YA7HQQJ3.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  CommonModule,
  InputFlags,
  MatIcon,
  MatIconModule,
  MatOption,
  Subject,
  debounceTime,
  distinctUntilChanged,
  inject,
  input,
  signal,
  startWith,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FJ3HNCAF.js";

// src/app/shared/components/teacher-card/teacher-card.component.ts
var _c0 = (a0) => ["/teachers", a0];
function TeacherCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.teacher().photo, \u0275\u0275sanitizeUrl)("alt", ctx_r0.teacher().full_name);
  }
}
function TeacherCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 10);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function TeacherCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd()();
  }
}
function TeacherCardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "app-radar-chart", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ratings", ctx_r0.teacher().average_ratings);
  }
}
var TeacherCardComponent = class _TeacherCardComponent {
  constructor() {
    this.teacher = input.required();
    this.showRadar = false;
  }
  static {
    this.\u0275fac = function TeacherCardComponent_Factory(t) {
      return new (t || _TeacherCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherCardComponent, selectors: [["app-teacher-card"]], inputs: { teacher: [InputFlags.SignalBased, "teacher"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 10, consts: [[1, "tcard", "card", 3, "mouseenter", "mouseleave", "routerLink"], [1, "tcard__photo"], [3, "src", "alt"], ["matTooltip", "Verified teacher", 1, "tcard__verified"], [1, "tcard__body"], [1, "tcard__top"], [1, "tcard__name"], [3, "value"], [1, "tcard__age", "text-muted"], [1, "tcard__radar"], [1, "tcard__photo-icon"], ["size", "180px", "primaryLabel", "Ratings", 3, "ratings"]], template: function TeacherCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0);
        \u0275\u0275listener("mouseenter", function TeacherCardComponent_Template_a_mouseenter_0_listener() {
          return ctx.showRadar = true;
        })("mouseleave", function TeacherCardComponent_Template_a_mouseleave_0_listener() {
          return ctx.showRadar = false;
        });
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275template(2, TeacherCardComponent_Conditional_2_Template, 1, 2, "img", 2)(3, TeacherCardComponent_Conditional_3_Template, 2, 0)(4, TeacherCardComponent_Conditional_4_Template, 3, 0, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "h3", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "app-rating-badge", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, TeacherCardComponent_Conditional_12_Template, 2, 1, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, ctx.teacher().id));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(2, ctx.teacher().photo ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(4, ctx.teacher().is_verified ? 4 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.teacher().full_name);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.teacher().average_ratings.overall);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("", ctx.teacher().age_range, " yrs \xB7 ", ctx.teacher().review_count, " reviews");
        \u0275\u0275advance();
        \u0275\u0275conditional(12, ctx.showRadar && ctx.teacher().average_ratings.overall > 0 ? 12 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, MatIconModule, MatIcon, MatChipsModule, MatTooltipModule, MatTooltip, RatingBadgeComponent, RadarChartComponent], styles: ["\n\n.tcard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 16px 16px;\n  text-decoration: none;\n  color: var(--color-text);\n  position: relative;\n  overflow: visible;\n  transition: transform 180ms ease, box-shadow 180ms ease;\n  cursor: pointer;\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n  text-decoration: none;\n}\n.tcard__photo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: var(--color-surface-2);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-shrink: 0;\n}\n.tcard__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tcard__photo-icon[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--color-text-muted);\n}\n.tcard__verified[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  border-radius: 50%;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tcard__verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #1976d2;\n  width: 18px;\n  height: 18px;\n}\n.tcard__body[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n}\n.tcard__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.tcard__name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0 0 4px;\n  line-height: 1.3;\n}\n.tcard__age[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.tcard__radar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  padding: 12px;\n  z-index: 200;\n  pointer-events: none;\n}\n/*# sourceMappingURL=teacher-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherCardComponent, { className: "TeacherCardComponent", filePath: "src\\app\\shared\\components\\teacher-card\\teacher-card.component.ts", lineNumber: 19 });
})();

// src/app/features/teachers/teacher-list/teacher-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.value;
var _c02 = () => [10, 20, 50];
function TeacherListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formControl", ctx_r1.filters.get("ageRanges").get(range_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1, " ");
  }
}
function TeacherListComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3.title);
  }
}
function TeacherListComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function TeacherListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.total(), ")");
  }
}
function TeacherListComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading-spinner");
  }
}
function TeacherListComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No teachers match your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function TeacherListComponent_Conditional_46_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(6, "Clear filters");
    \u0275\u0275elementEnd()();
  }
}
function TeacherListComponent_Conditional_47_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-teacher-card", 18);
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275property("teacher", t_r7);
  }
}
function TeacherListComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, TeacherListComponent_Conditional_47_For_2_Template, 1, 1, "app-teacher-card", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-paginator", 19);
    \u0275\u0275listener("page", function TeacherListComponent_Conditional_47_Template_mat_paginator_page_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.teachers());
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r1.total())("pageSize", ctx_r1.pageSize)("pageIndex", ctx_r1.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(4, _c02));
  }
}
var AGE_RANGES = ["20-30", "30-40", "40-50", "50-60", "60+"];
var TeacherListComponent = class _TeacherListComponent {
  constructor() {
    this.svc = inject(TeacherService);
    this.subjectSvc = inject(SubjectService);
    this.fb = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.destroy$ = new Subject();
    this.ageRanges = AGE_RANGES;
    this.teachers = signal([]);
    this.total = signal(0);
    this.loading = signal(true);
    this.subjects = signal([]);
    this.pageSize = 20;
    this.pageIndex = 0;
    this.filters = this.fb.group({
      search: [""],
      ageRanges: this.fb.group(Object.fromEntries(AGE_RANGES.map((r) => [r, false]))),
      subjectId: [null],
      ordering: ["-average_ratings__overall"]
    });
    this.sortOptions = [
      { value: "-average_ratings__overall", label: "Highest rating" },
      { value: "average_ratings__overall", label: "Lowest rating" },
      { value: "full_name", label: "Name A \u2192 Z" },
      { value: "-full_name", label: "Name Z \u2192 A" }
    ];
  }
  ngOnInit() {
    const qSearch = this.route.snapshot.queryParamMap.get("search");
    if (qSearch)
      this.filters.get("search").setValue(qSearch);
    this.subjectSvc.getAll().subscribe((r) => this.subjects.set(r.results));
    this.filters.valueChanges.pipe(debounceTime(300), distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)), startWith(this.filters.value), takeUntil(this.destroy$)).subscribe(() => {
      this.pageIndex = 0;
      this.fetch();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPageChange(e) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.fetch();
  }
  clearFilters() {
    this.filters.reset({
      search: "",
      ageRanges: Object.fromEntries(AGE_RANGES.map((r) => [r, false])),
      subjectId: null,
      ordering: "-average_ratings__overall"
    });
  }
  fetch() {
    this.loading.set(true);
    const { search, ageRanges, subjectId, ordering } = this.filters.value;
    const selectedAges = AGE_RANGES.filter((r) => ageRanges[r]);
    this.svc.getAll({
      search: search || void 0,
      age_range: selectedAges.length === 1 ? selectedAges[0] : void 0,
      subject: subjectId ?? void 0,
      ordering: ordering || void 0,
      page: this.pageIndex + 1
    }).subscribe({
      next: (res) => {
        this.teachers.set(res.results);
        this.total.set(res.count);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function TeacherListComponent_Factory(t) {
      return new (t || _TeacherListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherListComponent, selectors: [["app-teacher-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 48, vars: 6, consts: [[1, "tlist", "page-container"], [1, "tlist__sidebar", "card"], [1, "tlist__sidebar-title"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matPrefix", ""], ["matInput", "", "placeholder", "e.g. Nabiev", 3, "formControl"], [1, "tlist__filter-group"], [1, "tlist__filter-label"], [3, "formControl"], [3, "value"], ["mat-stroked-button", "", 1, "w-full", 3, "click"], [1, "tlist__main"], [1, "tlist__topbar"], [1, "tlist__heading"], [1, "text-muted", "tlist__count"], [1, "tlist__empty"], ["mat-stroked-button", "", 3, "click"], [1, "tlist__grid"], [3, "teacher"], [3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"]], template: function TeacherListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-form-field", 3)(5, "mat-label");
        \u0275\u0275text(6, "Search by name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-icon", 4);
        \u0275\u0275text(8, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "mat-divider");
        \u0275\u0275elementStart(11, "div", 6)(12, "h3", 7);
        \u0275\u0275text(13, "Age range");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(14, TeacherListComponent_For_15_Template, 2, 2, "mat-checkbox", 8, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "mat-divider");
        \u0275\u0275elementStart(17, "div", 6)(18, "h3", 7);
        \u0275\u0275text(19, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 3)(21, "mat-label");
        \u0275\u0275text(22, "Any subject");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-select", 8)(24, "mat-option", 9);
        \u0275\u0275text(25, "Any subject");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(26, TeacherListComponent_For_27_Template, 2, 2, "mat-option", 9, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(28, "mat-divider");
        \u0275\u0275elementStart(29, "div", 6)(30, "h3", 7);
        \u0275\u0275text(31, "Sort by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 3)(33, "mat-select", 8);
        \u0275\u0275repeaterCreate(34, TeacherListComponent_For_35_Template, 2, 2, "mat-option", 9, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "button", 10);
        \u0275\u0275listener("click", function TeacherListComponent_Template_button_click_36_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275elementStart(37, "mat-icon");
        \u0275\u0275text(38, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " Clear filters ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 11)(41, "div", 12)(42, "h1", 13);
        \u0275\u0275text(43, " Teachers ");
        \u0275\u0275template(44, TeacherListComponent_Conditional_44_Template, 2, 1, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, TeacherListComponent_Conditional_45_Template, 1, 0, "app-loading-spinner")(46, TeacherListComponent_Conditional_46_Template, 7, 0)(47, TeacherListComponent_Conditional_47_Template, 4, 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formControl", ctx.filters.get("search"));
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.ageRanges);
        \u0275\u0275advance(9);
        \u0275\u0275property("formControl", ctx.filters.get("subjectId"));
        \u0275\u0275advance();
        \u0275\u0275property("value", null);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.subjects());
        \u0275\u0275advance(7);
        \u0275\u0275property("formControl", ctx.filters.get("ordering"));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sortOptions);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(44, !ctx.loading() ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.loading() ? 45 : ctx.teachers().length === 0 ? 46 : 47);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatCheckboxModule, MatCheckbox, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatIconModule, MatIcon, MatPaginatorModule, MatPaginator, MatDividerModule, MatDivider, TeacherCardComponent, LoadingSpinnerComponent], styles: ["\n\n.tlist[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n  padding-top: 24px;\n}\n.tlist__sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  position: sticky;\n  top: 80px;\n}\n.tlist__sidebar-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.tlist__filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.tlist__filter-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.tlist__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tlist__topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.tlist__heading[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0;\n}\n.tlist__count[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-left: 8px;\n}\n.tlist__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.tlist__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  color: var(--color-text-muted);\n}\n.tlist__empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n}\n@media (max-width: 768px) {\n  .tlist[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .tlist__sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    position: static;\n  }\n}\n/*# sourceMappingURL=teacher-list.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherListComponent, { className: "TeacherListComponent", filePath: "src\\app\\features\\teachers\\teacher-list\\teacher-list.component.ts", lineNumber: 36 });
})();
export {
  TeacherListComponent
};
//# sourceMappingURL=chunk-DTUVIC4V.js.map
