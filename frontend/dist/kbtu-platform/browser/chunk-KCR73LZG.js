import {
  AdminService
} from "./chunk-NGKJDZYU.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-JWFEWHSN.js";
import {
  MatChipsModule
} from "./chunk-7US2R33H.js";
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
import {
  SelectionModel
} from "./chunk-Y3OEKMN4.js";
import "./chunk-BYL5JOIU.js";
import "./chunk-DDA5LCZW.js";
import "./chunk-PKU3V226.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-T2DY3HHO.js";
import {
  MatButton,
  MatButtonModule,
  MatIconAnchor,
  MatIconButton
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  ChangeDetectorRef,
  CommonModule,
  DatePipe,
  MatIcon,
  MatIconModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-FJ3HNCAF.js";

// src/app/features/admin-dashboard/materials/material-moderation.component.ts
function MaterialModerationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function MaterialModerationComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveSelected());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Approve selected (", ctx_r1.selection.selected.length, ") ");
  }
}
function MaterialModerationComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pending materials \u2014 queue is clear!");
    \u0275\u0275elementEnd()();
  }
}
function MaterialModerationComponent_Conditional_7_th_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 22)(1, "mat-checkbox", 23);
    \u0275\u0275listener("change", function MaterialModerationComponent_Conditional_7_th_2_Template_mat_checkbox_change_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAll());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
  }
}
function MaterialModerationComponent_Conditional_7_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "mat-checkbox", 25);
    \u0275\u0275listener("change", function MaterialModerationComponent_Conditional_7_td_3_Template_mat_checkbox_change_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selection.toggle(row_r5));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selection.isSelected(row_r5));
  }
}
function MaterialModerationComponent_Conditional_7_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.title);
  }
}
function MaterialModerationComponent_Conditional_7_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("mod__chip mod__chip--", row_r7.type, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.type);
  }
}
function MaterialModerationComponent_Conditional_7_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Contributor");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.contributor_name);
  }
}
function MaterialModerationComponent_Conditional_7_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Submitted");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r9.created_at, "mediumDate"));
  }
}
function MaterialModerationComponent_Conditional_7_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Link");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "mat-icon");
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", row_r10.link, \u0275\u0275sanitizeUrl);
  }
}
function MaterialModerationComponent_Conditional_7_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275template(1, MaterialModerationComponent_Conditional_7_td_18_Conditional_1_Template, 3, 1, "a", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(1, row_r10.link ? 1 : -1);
  }
}
function MaterialModerationComponent_Conditional_7_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function MaterialModerationComponent_Conditional_7_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "button", 29);
    \u0275\u0275listener("click", function MaterialModerationComponent_Conditional_7_td_21_Template_button_click_1_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.approve(row_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function MaterialModerationComponent_Conditional_7_td_21_Template_button_click_4_listener($event) {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.reject(row_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()()();
  }
}
function MaterialModerationComponent_Conditional_7_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function MaterialModerationComponent_Conditional_7_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 32);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mod__row--selected", ctx_r1.selection.isSelected(row_r13));
  }
}
function MaterialModerationComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 8);
    \u0275\u0275elementContainerStart(1, 9);
    \u0275\u0275template(2, MaterialModerationComponent_Conditional_7_th_2_Template, 2, 2, "th", 10)(3, MaterialModerationComponent_Conditional_7_td_3_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 12);
    \u0275\u0275template(5, MaterialModerationComponent_Conditional_7_th_5_Template, 2, 0, "th", 10)(6, MaterialModerationComponent_Conditional_7_td_6_Template, 3, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 13);
    \u0275\u0275template(8, MaterialModerationComponent_Conditional_7_th_8_Template, 2, 0, "th", 10)(9, MaterialModerationComponent_Conditional_7_td_9_Template, 3, 4, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 14);
    \u0275\u0275template(11, MaterialModerationComponent_Conditional_7_th_11_Template, 2, 0, "th", 10)(12, MaterialModerationComponent_Conditional_7_td_12_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 15);
    \u0275\u0275template(14, MaterialModerationComponent_Conditional_7_th_14_Template, 2, 0, "th", 10)(15, MaterialModerationComponent_Conditional_7_td_15_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 17);
    \u0275\u0275template(17, MaterialModerationComponent_Conditional_7_th_17_Template, 2, 0, "th", 10)(18, MaterialModerationComponent_Conditional_7_td_18_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 18);
    \u0275\u0275template(20, MaterialModerationComponent_Conditional_7_th_20_Template, 2, 0, "th", 10)(21, MaterialModerationComponent_Conditional_7_td_21_Template, 7, 0, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, MaterialModerationComponent_Conditional_7_tr_22_Template, 1, 0, "tr", 19)(23, MaterialModerationComponent_Conditional_7_tr_23_Template, 1, 2, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.materials());
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.cols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.cols);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.materials().length, " pending material(s)");
  }
}
var MaterialModerationComponent = class _MaterialModerationComponent {
  constructor() {
    this.adminSvc = inject(AdminService);
    this.snack = inject(MatSnackBar);
    this.cdr = inject(ChangeDetectorRef);
    this.cols = ["select", "title", "type", "contributor_name", "created_at", "link", "actions"];
    this.selection = new SelectionModel(true, []);
    this.loading = signal(true);
    this.materials = signal([]);
  }
  ngOnInit() {
    this.load();
  }
  isAllSelected() {
    return this.selection.selected.length === this.materials().length && this.materials().length > 0;
  }
  toggleAll() {
    this.isAllSelected() ? this.selection.clear() : this.selection.select(...this.materials());
  }
  approve(m) {
    this.adminSvc.approveMaterial(m.id).subscribe({
      next: () => {
        this.materials.update((list) => list.filter((x) => x.id !== m.id));
        this.selection.deselect(m);
        this.snack.open(`"${m.title}" approved.`, "Close", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Approval failed.", "Close", { duration: 3e3, panelClass: ["error-snack"] })
    });
  }
  reject(m) {
    this.adminSvc.rejectMaterial(m.id).subscribe({
      next: () => {
        this.materials.update((list) => list.filter((x) => x.id !== m.id));
        this.selection.deselect(m);
        this.snack.open(`"${m.title}" rejected.`, "Close", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Rejection failed.", "Close", { duration: 3e3, panelClass: ["error-snack"] })
    });
  }
  approveSelected() {
    const selected = [...this.selection.selected];
    selected.forEach((m) => this.approve(m));
  }
  load() {
    this.loading.set(true);
    this.adminSvc.getPendingMaterials().subscribe({
      next: (r) => {
        this.materials.set(r.results);
        this.loading.set(false);
        this.cdr.markForCheck();
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function MaterialModerationComponent_Factory(t) {
      return new (t || _MaterialModerationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaterialModerationComponent, selectors: [["app-material-moderation"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "mod"], [1, "mod__header"], [1, "mod__title"], ["mat-raised-button", "", "color", "primary"], [1, "mod__spinner"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["diameter", "48"], [1, "mod__empty"], ["mat-table", "", 1, "mod__table", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "type"], ["matColumnDef", "contributor_name"], ["matColumnDef", "created_at"], ["mat-cell", "", "class", "text-muted", 4, "matCellDef"], ["matColumnDef", "link"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "mod__row--selected", 4, "matRowDef", "matRowDefColumns"], [1, "text-muted", "mod__count"], ["mat-header-cell", ""], [3, "change", "checked", "indeterminate"], ["mat-cell", ""], [3, "change", "checked"], [1, "mod__mat-title"], ["mat-cell", "", 1, "text-muted"], ["target", "_blank", "mat-icon-button", "", "matTooltip", "Open link", 3, "href"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Approve", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Reject", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function MaterialModerationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Material Moderation");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MaterialModerationComponent_Conditional_4_Template, 4, 1, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, MaterialModerationComponent_Conditional_5_Template, 2, 0, "div", 4)(6, MaterialModerationComponent_Conditional_6_Template, 5, 0)(7, MaterialModerationComponent_Conditional_7_Template, 26, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(4, ctx.selection.hasValue() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.loading() ? 5 : ctx.materials().length === 0 ? 6 : 7);
      }
    }, dependencies: [CommonModule, DatePipe, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconAnchor, MatIconButton, MatIconModule, MatIcon, MatCheckboxModule, MatCheckbox, MatChipsModule, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip], styles: ["\n\n.mod[_ngcontent-%COMP%] {\n  max-width: 960px;\n}\n.mod__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.mod__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0;\n}\n.mod__spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n.mod__empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 60px 0;\n  color: var(--color-text-muted);\n  mat-icon {\n    font-size: 48px;\n    height: 48px;\n    width: 48px;\n    color: var(--color-success);\n  }\n}\n.mod__table[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--color-surface);\n}\n.mod__mat-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: .9rem;\n}\n.mod__chip[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  padding: 2px 9px;\n  border-radius: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.mod__chip--lecture[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.mod__chip--exam[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #880e4f;\n}\n.mod__chip--book[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.mod__chip--other[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.mod__row--selected[_ngcontent-%COMP%] {\n  background: rgba(57, 73, 171, .06);\n}\n.mod__count[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=material-moderation.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaterialModerationComponent, { className: "MaterialModerationComponent", filePath: "src\\app\\features\\admin-dashboard\\materials\\material-moderation.component.ts", lineNumber: 157 });
})();
export {
  MaterialModerationComponent
};
//# sourceMappingURL=chunk-KCR73LZG.js.map
