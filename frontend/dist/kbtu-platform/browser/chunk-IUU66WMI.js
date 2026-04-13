import {
  TeacherService
} from "./chunk-BKOIVKHD.js";
import {
  ReviewService
} from "./chunk-MTWTBI5M.js";
import {
  MatChipsModule
} from "./chunk-7US2R33H.js";
import {
  AuthService
} from "./chunk-HQ5XUSHA.js";
import {
  MatSnackBar
} from "./chunk-QFF2GCGT.js";
import {
  LoadingSpinnerComponent
} from "./chunk-2IBP76E2.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TNDBW4LG.js";
import "./chunk-24U2LF5Q.js";
import "./chunk-Y3OEKMN4.js";
import "./chunk-BYL5JOIU.js";
import "./chunk-DDA5LCZW.js";
import "./chunk-PKU3V226.js";
import {
  RadarChartComponent
} from "./chunk-RAM4OV2D.js";
import {
  MatDividerModule
} from "./chunk-D7TE3KK3.js";
import "./chunk-RJ2NYKHV.js";
import {
  RatingBadgeComponent
} from "./chunk-HSY2CFWJ.js";
import "./chunk-T2DY3HHO.js";
import {
  Router,
  RouterLink
} from "./chunk-YA7HQQJ3.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  CommonModule,
  DecimalPipe,
  InputFlags,
  MatIcon,
  MatIconModule,
  computed,
  inject,
  input,
  signal,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction5,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FJ3HNCAF.js";

// src/app/features/teachers/teacher-profile/teacher-profile.component.ts
var _forTrack0 = ($index, $item) => $item.year;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.course_instance_id;
var _c0 = (a0) => ({ label: "Overall", v: a0 });
var _c1 = (a0) => ({ label: "Clarity", v: a0 });
var _c2 = (a0) => ({ label: "Objectivity", v: a0 });
var _c3 = (a0) => ({ label: "Accessibility", v: a0 });
var _c4 = (a0) => ({ label: "Workload", v: a0 });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
var _c6 = (a0) => ["/course", a0];
function TeacherProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading-spinner", 0);
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 5);
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", t_r1.photo, \u0275\u0275sanitizeUrl)("alt", t_r1.full_name);
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_34_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, item_r2.v, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-radar-chart", 26);
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275repeaterCreate(2, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_34_For_3_Template, 6, 5, "div", 28, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ratings", t_r1.average_ratings);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction5(11, _c5, \u0275\u0275pureFunction1(1, _c0, t_r1.average_ratings.overall), \u0275\u0275pureFunction1(3, _c1, t_r1.average_ratings.clarity), \u0275\u0275pureFunction1(5, _c2, t_r1.average_ratings.objectivity), \u0275\u0275pureFunction1(7, _c3, t_r1.average_ratings.accessibility), \u0275\u0275pureFunction1(9, _c4, t_r1.average_ratings.workload)));
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No ratings yet.");
    \u0275\u0275elementEnd();
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 19)(1, "button", 31);
    \u0275\u0275listener("click", function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_36_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.showBiasSection.set(!ctx_r3.showBiasSection()));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "warning_amber");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Other markers (student-reported) ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 32);
    \u0275\u0275text(8, " Gender bias score: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ". This is based on student reports and should be interpreted with caution. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 1, t_r1.gender_bias_score, "1.1-1"), "/5");
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No teaching history recorded.");
    \u0275\u0275elementEnd();
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("border-left-color", ctx_r3.getRoleColor(item_r5.role));
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c6, item_r5.course_instance_id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.subject_name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r3.getRoleColor(item_r5.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.role, " ");
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 38);
    \u0275\u0275repeaterCreate(6, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_For_2_For_7_Template, 5, 9, "a", 39, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r6.year);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(group_r6.items);
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_For_2_Template, 8, 1, "div", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.timelineGroups());
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No courses recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_For_53_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 43)(1, "div")(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c6, item_r7.course_instance_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.subject_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" \xB7 ", item_r7.year_interval, " \xB7 ", item_r7.role, "");
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_For_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TeacherProfileComponent_Conditional_1_Conditional_0_For_53_For_1_Template, 8, 6, "a", 43, _forTrack2);
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    \u0275\u0275repeater(group_r8.items);
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275template(4, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_4_Template, 1, 2, "img", 5)(5, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_5_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h1", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_10_Template, 3, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "app-rating-badge", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12)(20, "a", 13)(21, "mat-icon");
    \u0275\u0275text(22, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " All teachers ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "section", 16)(27, "h2", 17);
    \u0275\u0275text(28, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "blockquote", 18);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "section", 16)(32, "h2", 17);
    \u0275\u0275text(33, "Rating breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_34_Template, 4, 17)(35, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_35_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_36_Template, 13, 4, "section", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 20)(38, "section", 16)(39, "h2", 17);
    \u0275\u0275text(40, "Teaching history");
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_41_Template, 2, 0, "p", 21)(42, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_42_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "section", 22)(44, "h2", 17);
    \u0275\u0275text(45, "Student reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, TeacherProfileComponent_Conditional_1_Conditional_0_Conditional_46_Template, 2, 0, "p", 21);
    \u0275\u0275elementStart(47, "p", 23)(48, "mat-icon");
    \u0275\u0275text(49, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, " Reviews are written per course. View a specific course below to read or write reviews. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 24);
    \u0275\u0275repeaterCreate(52, TeacherProfileComponent_Conditional_1_Conditional_0_For_53_Template, 2, 0, null, null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r1 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(4, t_r1.photo ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r1.full_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, t_r1.is_verified ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", t_r1.age_range, " yrs");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r1.review_count, " reviews");
    \u0275\u0275advance();
    \u0275\u0275property("value", t_r1.average_ratings.overall);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(t_r1.description);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(34, t_r1.average_ratings.overall > 0 ? 34 : 35);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(36, ctx_r3.showBiasSection() ? 36 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(41, ctx_r3.timelineGroups().length === 0 ? 41 : 42);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(46, !t_r1.teaching_history || t_r1.teaching_history.length === 0 ? 46 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.timelineGroups());
  }
}
function TeacherProfileComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "p", 21);
    \u0275\u0275text(2, "Teacher not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 13);
    \u0275\u0275text(4, "Back to teachers");
    \u0275\u0275elementEnd()();
  }
}
function TeacherProfileComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TeacherProfileComponent_Conditional_1_Conditional_0_Template, 54, 11, "div", 1)(1, TeacherProfileComponent_Conditional_1_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r3.teacher()) ? 0 : 1, tmp_1_0);
  }
}
var ROLE_COLORS = {
  Lecturer: "#3949ab",
  Practice: "#00897b",
  Labs: "#f57c00",
  All: "#8e24aa"
};
var TeacherProfileComponent = class _TeacherProfileComponent {
  constructor() {
    this.id = input.required();
    this.svc = inject(TeacherService);
    this.reviewSvc = inject(ReviewService);
    this.auth = inject(AuthService);
    this.snack = inject(MatSnackBar);
    this.router = inject(Router);
    this.teacher = signal(null);
    this.loading = signal(true);
    this.showBiasSection = signal(false);
    this.roleColors = ROLE_COLORS;
    this.timelineGroups = computed(() => {
      const history = this.teacher()?.teaching_history ?? [];
      const map = /* @__PURE__ */ new Map();
      for (const item of history) {
        const arr = map.get(item.year_interval) ?? [];
        arr.push(item);
        map.set(item.year_interval, arr);
      }
      return Array.from(map.entries()).map(([year, items]) => ({ year, items })).sort((a, b) => a.year.localeCompare(b.year));
    });
  }
  ngOnInit() {
    this.svc.getById(+this.id()).subscribe({
      next: (t) => {
        this.teacher.set(t);
        this.showBiasSection.set(!!t.show_gender_bias);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/teachers"]);
      }
    });
  }
  vote(review, dir) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.reviewSvc.vote(review.id, dir).subscribe({
      next: (r) => review.helpful_votes = r.helpful_votes,
      error: () => this.snack.open("Could not record vote.", "Close", { duration: 3e3 })
    });
  }
  reportReview(review) {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    const reason = prompt("Reason for report:");
    if (!reason)
      return;
    this.reviewSvc.report(review.id, reason).subscribe({
      next: () => this.snack.open("Review reported. Thank you.", "Close", { duration: 3e3 }),
      error: () => this.snack.open("Could not submit report.", "Close", { duration: 3e3 })
    });
  }
  getRoleColor(role) {
    return ROLE_COLORS[role] ?? "#757575";
  }
  static {
    this.\u0275fac = function TeacherProfileComponent_Factory(t) {
      return new (t || _TeacherProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherProfileComponent, selectors: [["app-teacher-profile"]], inputs: { id: [InputFlags.SignalBased, "id"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["minHeight", "400px"], [1, "profile"], [1, "profile__header"], [1, "page-container", "profile__header-inner"], [1, "profile__photo-wrap"], [1, "profile__photo", 3, "src", "alt"], [1, "profile__hero-info"], [1, "profile__name-row"], [1, "profile__name"], ["matTooltip", "Verified KBTU teacher", 1, "profile__verified"], [1, "profile__meta", "text-muted"], [3, "value"], [1, "profile__actions"], ["mat-stroked-button", "", "routerLink", "/teachers"], [1, "page-container", "profile__body"], [1, "profile__col-left"], [1, "profile__section", "card"], [1, "profile__section-title"], [1, "profile__desc"], [1, "profile__section", "card", "profile__bias-section"], [1, "profile__col-right"], [1, "text-muted"], [1, "profile__section"], [1, "text-muted", "profile__reviews-hint"], [1, "profile__course-links"], [1, "profile__photo", "profile__photo--placeholder"], ["size", "280px", "primaryLabel", "Ratings", 3, "ratings"], [1, "profile__rating-row"], [1, "profile__stat"], [1, "profile__stat-val"], [1, "profile__stat-lbl", "text-muted"], ["mat-button", "", 1, "profile__bias-toggle", 3, "click"], [1, "text-muted", "profile__bias-note"], [1, "timeline"], [1, "timeline__group"], [1, "timeline__year-marker"], [1, "timeline__year-label"], [1, "timeline__year-line"], [1, "timeline__items"], [1, "timeline__item", 3, "routerLink", "border-left-color"], [1, "timeline__item", 3, "routerLink"], [1, "timeline__subject"], [1, "timeline__role"], [1, "profile__course-link", "card", 3, "routerLink"], [1, "profile__course-name"], [1, "page-container", 2, "padding-top", "40px"]], template: function TeacherProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TeacherProfileComponent_Conditional_0_Template, 1, 0, "app-loading-spinner", 0)(1, TeacherProfileComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      DecimalPipe,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatDividerModule,
      RadarChartComponent,
      RatingBadgeComponent,
      LoadingSpinnerComponent
    ], styles: ["\n\n.profile__header[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  padding: 32px 0;\n}\n.profile__header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.profile__photo-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.profile__photo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid var(--color-border);\n}\n.profile__photo--placeholder[_ngcontent-%COMP%] {\n  background: var(--color-surface-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.profile__photo--placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 52px;\n  color: var(--color-text-muted);\n}\n.profile__hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.profile__name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.profile__name[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin: 0;\n}\n.profile__verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #1976d2;\n  vertical-align: middle;\n}\n.profile__meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 0.9rem;\n}\n.profile__actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.profile__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 24px;\n  padding-top: 28px;\n  padding-bottom: 40px;\n}\n.profile__col-left[_ngcontent-%COMP%], .profile__col-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile__section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.profile__section-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 14px;\n}\n.profile__desc[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--color-primary);\n  margin: 0;\n  padding: 8px 16px;\n  font-style: italic;\n  line-height: 1.65;\n  color: var(--color-text-muted);\n}\n.profile__rating-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 12px;\n}\n.profile__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.profile__stat-val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.profile__stat-lbl[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: capitalize;\n}\n.profile__bias-section[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.profile__bias-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n}\n.profile__bias-note[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  margin: 8px 0 0;\n}\n.profile__reviews-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  margin-bottom: 12px;\n}\n.profile__reviews-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.profile__course-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.profile__course-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  text-decoration: none;\n  color: var(--color-text);\n}\n.profile__course-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.profile__course-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.timeline__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.timeline__year-marker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.timeline__year-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n.timeline__year-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n.timeline__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding-left: 12px;\n}\n.timeline__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border-left: 3px solid var(--color-border);\n  background: var(--color-surface-2);\n  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n  text-decoration: none;\n  color: var(--color-text);\n  transition: background var(--transition);\n}\n.timeline__item[_ngcontent-%COMP%]:hover {\n  background: var(--color-border);\n  text-decoration: none;\n}\n.timeline__subject[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 500;\n}\n.timeline__role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n@media (max-width: 900px) {\n  .profile__body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=teacher-profile.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherProfileComponent, { className: "TeacherProfileComponent", filePath: "src\\app\\features\\teachers\\teacher-profile\\teacher-profile.component.ts", lineNumber: 38 });
})();
export {
  TeacherProfileComponent
};
//# sourceMappingURL=chunk-IUU66WMI.js.map
