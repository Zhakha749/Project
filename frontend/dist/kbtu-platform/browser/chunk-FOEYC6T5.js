import {
  AdminService
} from "./chunk-NGKJDZYU.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-KAKEXB37.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-XNCJIID7.js";
import {
  MatSnackBar
} from "./chunk-QFF2GCGT.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-TNDBW4LG.js";
import "./chunk-24U2LF5Q.js";
import "./chunk-Y3OEKMN4.js";
import "./chunk-PKU3V226.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-T2DY3HHO.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  MatIcon,
  MatIconModule,
  SlicePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FJ3HNCAF.js";

// src/app/features/admin-dashboard/reports/report-moderation.component.ts
function ReportModerationComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon");
    \u0275\u0275text(2, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No open reports \u2014 all clear!");
    \u0275\u0275elementEnd()();
  }
}
function ReportModerationComponent_Conditional_5_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Review excerpt");
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_5_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19)(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(3, 2, row_r1.review_text, 0, 120), "", row_r1.review_text.length > 120 ? "\u2026" : "", "");
  }
}
function ReportModerationComponent_Conditional_5_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Reporter");
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_5_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.reporter_name);
  }
}
function ReportModerationComponent_Conditional_5_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Reason");
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_5_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(3, 2, row_r3.reason, 0, 80), "", row_r3.reason.length > 80 ? "\u2026" : "", "");
  }
}
function ReportModerationComponent_Conditional_5_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_5_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r4.created_at, "mediumDate"));
  }
}
function ReportModerationComponent_Conditional_5_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ReportModerationComponent_Conditional_5_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 19)(1, "button", 23)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 0)(6, "button", 24);
    \u0275\u0275listener("click", function ReportModerationComponent_Conditional_5_td_15_Template_button_click_6_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.resolve(row_r6, "hide_review"));
    });
    \u0275\u0275elementStart(7, "mat-icon", 25);
    \u0275\u0275text(8, "visibility_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Hide review ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 24);
    \u0275\u0275listener("click", function ReportModerationComponent_Conditional_5_td_15_Template_button_click_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.resolve(row_r6, "dismiss"));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Dismiss report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 24);
    \u0275\u0275listener("click", function ReportModerationComponent_Conditional_5_td_15_Template_button_click_14_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.resolve(row_r6, "ban_user"));
    });
    \u0275\u0275elementStart(15, "mat-icon", 25);
    \u0275\u0275text(16, "person_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Ban user ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const actionMenu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionMenu_r8);
  }
}
function ReportModerationComponent_Conditional_5_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function ReportModerationComponent_Conditional_5_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function ReportModerationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 6);
    \u0275\u0275elementContainerStart(1, 7);
    \u0275\u0275template(2, ReportModerationComponent_Conditional_5_th_2_Template, 2, 0, "th", 8)(3, ReportModerationComponent_Conditional_5_td_3_Template, 4, 6, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 10);
    \u0275\u0275template(5, ReportModerationComponent_Conditional_5_th_5_Template, 2, 0, "th", 8)(6, ReportModerationComponent_Conditional_5_td_6_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 11);
    \u0275\u0275template(8, ReportModerationComponent_Conditional_5_th_8_Template, 2, 0, "th", 8)(9, ReportModerationComponent_Conditional_5_td_9_Template, 4, 6, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 12);
    \u0275\u0275template(11, ReportModerationComponent_Conditional_5_th_11_Template, 2, 0, "th", 8)(12, ReportModerationComponent_Conditional_5_td_12_Template, 3, 4, "td", 13);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 14);
    \u0275\u0275template(14, ReportModerationComponent_Conditional_5_th_14_Template, 2, 0, "th", 8)(15, ReportModerationComponent_Conditional_5_td_15_Template, 18, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, ReportModerationComponent_Conditional_5_tr_16_Template, 1, 0, "tr", 15)(17, ReportModerationComponent_Conditional_5_tr_17_Template, 1, 0, "tr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 17);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r6.reports());
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r6.cols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r6.cols);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r6.reports().length, " open report(s)");
  }
}
var ReportModerationComponent = class _ReportModerationComponent {
  constructor() {
    this.adminSvc = inject(AdminService);
    this.snack = inject(MatSnackBar);
    this.cdr = inject(ChangeDetectorRef);
    this.cols = ["review_text", "reporter_name", "reason", "created_at", "actions"];
    this.loading = signal(true);
    this.reports = signal([]);
  }
  ngOnInit() {
    this.adminSvc.getOpenReports().subscribe({
      next: (r) => {
        this.reports.set(r.results);
        this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: () => this.loading.set(false)
    });
  }
  resolve(report, action) {
    this.adminSvc.resolveReport(report.id, action).subscribe({
      next: () => {
        this.reports.update((list) => list.filter((r) => r.id !== report.id));
        const msg = action === "hide_review" ? "Review hidden." : action === "dismiss" ? "Report dismissed." : "User banned.";
        this.snack.open(msg, "Close", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Action failed.", "Close", { duration: 3e3, panelClass: ["error-snack"] })
    });
  }
  static {
    this.\u0275fac = function ReportModerationComponent_Factory(t) {
      return new (t || _ReportModerationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportModerationComponent, selectors: [["app-report-moderation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["actionMenu", "matMenu"], [1, "rmod"], [1, "rmod__title"], [1, "rmod__spinner"], ["diameter", "48"], [1, "rmod__empty"], ["mat-table", "", 1, "rmod__table", 3, "dataSource"], ["matColumnDef", "review_text"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "reporter_name"], ["matColumnDef", "reason"], ["matColumnDef", "created_at"], ["mat-cell", "", "class", "text-muted", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "text-muted", "rmod__count"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "rmod__excerpt"], [1, "rmod__reason", "text-muted"], ["mat-cell", "", 1, "text-muted"], ["mat-icon-button", "", "matTooltip", "Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]], template: function ReportModerationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
        \u0275\u0275text(2, "Report Moderation");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ReportModerationComponent_Conditional_3_Template, 2, 0, "div", 3)(4, ReportModerationComponent_Conditional_4_Template, 5, 0)(5, ReportModerationComponent_Conditional_5_Template, 20, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(3, ctx.loading() ? 3 : ctx.reports().length === 0 ? 4 : 5);
      }
    }, dependencies: [CommonModule, SlicePipe, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger], styles: ["\n\n.rmod[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.rmod__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0 0 24px;\n}\n.rmod__spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.rmod__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  color: var(--color-text-muted);\n  mat-icon {\n    font-size: 48px;\n    height: 48px;\n    width: 48px;\n    color: var(--color-success);\n  }\n}\n.rmod__table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-surface);\n}\n.rmod__excerpt[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-style: italic;\n}\n.rmod__reason[_ngcontent-%COMP%] {\n  font-size: .82rem;\n}\n.rmod__count[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=report-moderation.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportModerationComponent, { className: "ReportModerationComponent", filePath: "src\\app\\features\\admin-dashboard\\reports\\report-moderation.component.ts", lineNumber: 112 });
})();
export {
  ReportModerationComponent
};
//# sourceMappingURL=chunk-FOEYC6T5.js.map
