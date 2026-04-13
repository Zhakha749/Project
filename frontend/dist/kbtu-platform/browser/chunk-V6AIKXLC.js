import {
  AuthService
} from "./chunk-HQ5XUSHA.js";
import {
  MatSnackBar
} from "./chunk-QFF2GCGT.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-K7F7UP3I.js";
import "./chunk-24U2LF5Q.js";
import "./chunk-Y3OEKMN4.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-BYL5JOIU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DDA5LCZW.js";
import "./chunk-PKU3V226.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-T2DY3HHO.js";
import {
  Router,
  RouterLink
} from "./chunk-YA7HQQJ3.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-FT2AHD6T.js";
import "./chunk-ZAEJD2HQ.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FJ3HNCAF.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 12);
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Log in ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
    this.loading = false;
    this.hidePassword = true;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe({
      next: () => this.router.navigate(["/"]),
      error: (err) => {
        this.loading = false;
        const msg = err?.error?.detail ?? "Invalid email or password.";
        this.snackBar.open(msg, "Close", { duration: 4e3, panelClass: ["error-snack"] });
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 8, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-card__header"], [1, "auth-card__title"], [1, "text-muted"], ["novalidate", "", 1, "auth-card__form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "you@kbtu.kz", "autocomplete", "email"], ["matPrefix", ""], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-full", "auth-card__submit", 3, "disabled"], ["diameter", "20"], [1, "auth-card__footer", "text-muted"], ["routerLink", "/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Log in to your KBTU account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "mat-form-field", 6)(9, "mat-label");
        \u0275\u0275text(10, "University email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 7);
        \u0275\u0275elementStart(12, "mat-icon", 8);
        \u0275\u0275text(13, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, LoginComponent_Conditional_14_Template, 2, 0, "mat-error")(15, LoginComponent_Conditional_15_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 6)(17, "mat-label");
        \u0275\u0275text(18, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 9);
        \u0275\u0275elementStart(20, "mat-icon", 8);
        \u0275\u0275text(21, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_22_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(23, "mat-icon");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(25, LoginComponent_Conditional_25_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 11);
        \u0275\u0275template(27, LoginComponent_Conditional_27_Template, 1, 0, "mat-spinner", 12)(28, LoginComponent_Conditional_28_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "p", 13);
        \u0275\u0275text(30, " Don't have an account? ");
        \u0275\u0275elementStart(31, "a", 14);
        \u0275\u0275text(32, "Sign up");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(14, ctx.form.controls.email.hasError("required") && ctx.form.controls.email.touched ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.form.controls.email.hasError("email") && ctx.form.controls.email.touched ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(25, ctx.form.controls.password.hasError("required") && ctx.form.controls.password.touched ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(27, ctx.loading ? 27 : 28);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 64px - 80px);\n  padding: 32px 16px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 40px 36px;\n}\n.auth-card__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card__title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: var(--color-text);\n}\n.auth-card__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.auth-card__submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 44px;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-card__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 25 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-V6AIKXLC.js.map
