import {
  TeacherService
} from "./chunk-BKOIVKHD.js";
import {
  SubjectService
} from "./chunk-DH32MYIY.js";
import {
  MatChipsModule
} from "./chunk-7US2R33H.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-K7F7UP3I.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-BYL5JOIU.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-DDA5LCZW.js";
import "./chunk-PKU3V226.js";
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
  MatIcon,
  MatIconModule,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FJ3HNCAF.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.n;
var _c0 = () => ({ icon: "search", n: "1", title: "Search", desc: "Find teachers and subjects by name, category, or department." });
var _c1 = () => ({ icon: "compare_arrows", n: "2", title: "Compare", desc: "Compare two teachers side-by-side on grades, difficulty, and ratings." });
var _c2 = () => ({ icon: "school", n: "3", title: "Choose", desc: "Make an informed course selection backed by real student data." });
var _c3 = (a0, a1, a2) => [a0, a1, a2];
var _c4 = (a0) => ["/teachers", a0];
var _c5 = (a0) => ["/subjects", a0];
function HomeComponent_For_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const teacher_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", teacher_r1.photo, \u0275\u0275sanitizeUrl)("alt", teacher_r1.full_name);
  }
}
function HomeComponent_For_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 34);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19)(1, "div", 28);
    \u0275\u0275template(2, HomeComponent_For_37_Conditional_2_Template, 1, 2, "img", 29)(3, HomeComponent_For_37_Conditional_3_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "h3", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "star");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const teacher_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c4, teacher_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, teacher_r1.photo ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(teacher_r1.full_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", teacher_r1.age_range, " yrs");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getRatingClass(teacher_r1.average_ratings.overall));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, teacher_r1.average_ratings.overall, "1.1-1"), " ");
  }
}
function HomeComponent_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 38)(9, "span", 39);
    \u0275\u0275text(10, "Difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 40);
    \u0275\u0275element(12, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const subject_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c5, subject_r3.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(subject_r3.title);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("subject-card__badge badge badge--", subject_r3.category, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subject_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", subject_r3.credits, " credits");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.getDifficultyWidth(subject_r3.overall_difficulty));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 10, subject_r3.overall_difficulty, "1.1-1"), "/10");
  }
}
function HomeComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 42)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r4.desc);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.teacherSvc = inject(TeacherService);
    this.subjectSvc = inject(SubjectService);
    this.router = inject(Router);
    this.searchCtrl = new FormControl("");
    this.topTeachers = signal([]);
    this.subjects = signal([]);
    this.stats = signal({ teachers: 0, subjects: 0, reviews: 0 });
  }
  ngOnInit() {
    this.teacherSvc.getAll({ ordering: "-average_ratings__overall" }).subscribe((res) => {
      this.topTeachers.set(res.results.slice(0, 6));
      this.stats.update((s) => __spreadProps(__spreadValues({}, s), { teachers: res.count }));
    });
    this.subjectSvc.getAll().subscribe((res) => {
      this.subjects.set(res.results.slice(0, 8));
      this.stats.update((s) => __spreadProps(__spreadValues({}, s), { subjects: res.count }));
    });
  }
  search() {
    const q = this.searchCtrl.value?.trim();
    if (q)
      this.router.navigate(["/teachers"], { queryParams: { search: q } });
  }
  getRatingClass(rating) {
    if (rating >= 8)
      return "rating-high";
    if (rating >= 5)
      return "rating-mid";
    return "rating-low";
  }
  getDifficultyWidth(difficulty) {
    return `${difficulty / 10 * 100}%`;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 56, vars: 10, consts: [[1, "hero"], [1, "hero__inner", "page-container"], [1, "hero__title"], [1, "hero__accent"], [1, "hero__sub"], [1, "hero__search"], ["appearance", "outline", "subscriptSizing", "dynamic", 1, "hero__search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search teachers or subjects\u2026", 3, "keyup.enter", "formControl"], ["mat-raised-button", "", "color", "primary", 1, "hero__search-btn", 3, "click"], [1, "hero__stats"], [1, "hero__stat"], [1, "hero__stat-value"], [1, "hero__stat-label", "text-muted"], [1, "section", "page-container"], [1, "section__header"], [1, "section__title"], ["mat-button", "", "routerLink", "/teachers"], [1, "teacher-grid"], [1, "teacher-card", "card", 3, "routerLink"], ["mat-button", "", "routerLink", "/subjects"], [1, "subject-grid"], [1, "subject-card", "card", 3, "routerLink"], [1, "how-it-works"], [1, "page-container"], [1, "section__title", "text-center"], [1, "steps"], [1, "step"], [1, "teacher-card__avatar"], [3, "src", "alt"], [1, "teacher-card__info"], [1, "teacher-card__name"], [1, "text-muted", "teacher-card__age"], [1, "teacher-card__rating"], [1, "teacher-card__avatar-icon"], [1, "subject-card__top"], [1, "subject-card__title"], [1, "subject-card__credits", "text-muted"], [1, "subject-card__difficulty"], [1, "text-muted"], [1, "difficulty-bar"], [1, "difficulty-bar__fill"], [1, "step__icon"], [1, "step__num"], [1, "step__title"], [1, "step__desc", "text-muted"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Rate your ");
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "KBTU");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " professors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Transparent ratings, real reviews, and grade data from students who've been there.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "mat-form-field", 6)(11, "mat-icon", 7);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 8);
        \u0275\u0275listener("keyup.enter", function HomeComponent_Template_input_keyup_enter_13_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "button", 9);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_14_listener() {
          return ctx.search();
        });
        \u0275\u0275text(15, " Search ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "span", 12);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 13);
        \u0275\u0275text(21, "Teachers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 11)(23, "span", 12);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 13);
        \u0275\u0275text(26, "Subjects");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "section", 14)(28, "div", 15)(29, "h2", 16);
        \u0275\u0275text(30, "Top Teachers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 17);
        \u0275\u0275text(32, "View all ");
        \u0275\u0275elementStart(33, "mat-icon");
        \u0275\u0275text(34, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 18);
        \u0275\u0275repeaterCreate(36, HomeComponent_For_37_Template, 14, 12, "a", 19, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "section", 14)(39, "div", 15)(40, "h2", 16);
        \u0275\u0275text(41, "Trending Subjects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "a", 20);
        \u0275\u0275text(43, "View all ");
        \u0275\u0275elementStart(44, "mat-icon");
        \u0275\u0275text(45, "chevron_right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 21);
        \u0275\u0275repeaterCreate(47, HomeComponent_For_48_Template, 16, 15, "a", 22, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "section", 23)(50, "div", 24)(51, "h2", 25);
        \u0275\u0275text(52, "How it works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 26);
        \u0275\u0275repeaterCreate(54, HomeComponent_For_55_Template, 10, 4, "div", 27, _forTrack1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formControl", ctx.searchCtrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.stats().teachers);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.stats().subjects);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.topTeachers());
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.subjects());
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pureFunction3(6, _c3, \u0275\u0275pureFunction0(3, _c0), \u0275\u0275pureFunction0(4, _c1), \u0275\u0275pureFunction0(5, _c2)));
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatButtonModule, MatAnchor, MatButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatPrefix, MatFormFieldModule, MatChipsModule], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--color-primary) 0%,\n      #283593 100%);\n  color: #fff;\n  padding: 64px 0 48px;\n}\n.hero__inner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hero__title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  font-weight: 800;\n  margin: 0 0 12px;\n}\n.hero__accent[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.hero__sub[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.88;\n  margin: 0 0 36px;\n}\n.hero__search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 600px;\n  margin: 0 auto 40px;\n}\n.hero__search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fff;\n  border-radius: var(--radius-sm);\n}\n.hero__search-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  white-space: nowrap;\n}\n.hero__stats[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 48px;\n}\n.hero__stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero__stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n}\n.hero__stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.75;\n}\n.section[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n.section__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.section__header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.section__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.section__title.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.teacher-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n}\n.teacher-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 16px;\n  text-decoration: none;\n  color: var(--color-text);\n  gap: 10px;\n  transition: transform var(--transition);\n}\n.teacher-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  text-decoration: none;\n}\n.teacher-card__avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: var(--color-surface-2);\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.teacher-card__avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.teacher-card__avatar-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: var(--color-text-muted);\n}\n.teacher-card__info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.teacher-card__name[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  margin: 0;\n}\n.teacher-card__age[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.teacher-card__rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.teacher-card__rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n}\n.subject-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.subject-card[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  text-decoration: none;\n  color: var(--color-text);\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: transform var(--transition);\n}\n.subject-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  text-decoration: none;\n}\n.subject-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n}\n.subject-card__title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.subject-card__credits[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.subject-card__difficulty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: capitalize;\n}\n.badge--mandatory[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.badge--elective[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.badge--major[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge--minor[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge--profile[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge--mandatory[_ngcontent-%COMP%] {\n  background: #1a3a5c;\n  color: #90caf9;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge--elective[_ngcontent-%COMP%] {\n  background: #3a1a5c;\n  color: #ce93d8;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge--major[_ngcontent-%COMP%] {\n  background: #1a3a1c;\n  color: #a5d6a7;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge--minor[_ngcontent-%COMP%] {\n  background: #3a2a0a;\n  color: #ffcc80;\n}\n.dark-theme[_ngcontent-%COMP%]   .badge--profile[_ngcontent-%COMP%] {\n  background: #3a0a1a;\n  color: #f48fb1;\n}\n.difficulty-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--color-border);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.difficulty-bar__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #43a047,\n      #fb8c00,\n      #e53935);\n  border-radius: 3px;\n  transition: width 0.4s ease;\n}\n.how-it-works[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-top: 1px solid var(--color-border);\n  padding: 56px 0;\n  margin-top: 48px;\n}\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 32px;\n  margin-top: 40px;\n}\n.step[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.step__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: rgba(57, 73, 171, 0.12);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.step__icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: 28px;\n}\n.step__num[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--color-primary);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.step__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.step__desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  max-width: 220px;\n  margin: 0;\n}\n/*# sourceMappingURL=home.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 26 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-32TVTZYV.js.map
