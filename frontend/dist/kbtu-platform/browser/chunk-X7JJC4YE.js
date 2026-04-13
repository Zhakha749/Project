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

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "At least 3 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Only ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "@kbtu.kz");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " emails are allowed");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "At least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
  }
}
function RegisterComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create account ");
  }
}
function kbtuEmailValidator(ctrl) {
  const v = ctrl.value ?? "";
  if (v && !v.endsWith("@kbtu.kz")) {
    return { kbtuEmail: true };
  }
  return null;
}
function passwordMatchValidator(ctrl) {
  const pw = ctrl.get("password")?.value;
  const pw2 = ctrl.get("password2")?.value;
  return pw && pw2 && pw !== pw2 ? { passwordMismatch: true } : null;
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email, kbtuEmailValidator]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      password2: ["", Validators.required]
    }, { validators: passwordMatchValidator });
    this.loading = false;
    this.hidePassword = true;
    this.hidePassword2 = true;
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { username, email, password, password2 } = this.form.value;
    this.auth.register(username, email, password, password2).subscribe({
      next: () => {
        this.snackBar.open("Account created! Please log in.", "Close", { duration: 4e3 });
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        this.loading = false;
        const errors = err?.error;
        let msg = "Registration failed. Please check your details.";
        if (errors) {
          const first = Object.values(errors)[0];
          if (Array.isArray(first))
            msg = first[0];
        }
        this.snackBar.open(msg, "Close", { duration: 5e3, panelClass: ["error-snack"] });
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 53, vars: 15, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-card__header"], [1, "auth-card__title"], [1, "text-muted"], ["novalidate", "", 1, "auth-card__form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username", "placeholder", "your_username", "autocomplete", "username"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "you@kbtu.kz", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "password2", "autocomplete", "new-password", 3, "type"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-full", "auth-card__submit", 3, "disabled"], ["diameter", "20"], [1, "auth-card__footer", "text-muted"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "KBTU university email required");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "form", 5);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(8, "mat-form-field", 6)(9, "mat-label");
        \u0275\u0275text(10, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 7);
        \u0275\u0275elementStart(12, "mat-icon", 8);
        \u0275\u0275text(13, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, RegisterComponent_Conditional_14_Template, 2, 0, "mat-error")(15, RegisterComponent_Conditional_15_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-form-field", 6)(17, "mat-label");
        \u0275\u0275text(18, "University email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 9);
        \u0275\u0275elementStart(20, "mat-icon", 8);
        \u0275\u0275text(21, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, RegisterComponent_Conditional_22_Template, 2, 0, "mat-error")(23, RegisterComponent_Conditional_23_Template, 2, 0, "mat-error")(24, RegisterComponent_Conditional_24_Template, 5, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 6)(26, "mat-label");
        \u0275\u0275text(27, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "input", 10);
        \u0275\u0275elementStart(29, "mat-icon", 8);
        \u0275\u0275text(30, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "button", 11);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_31_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(34, RegisterComponent_Conditional_34_Template, 2, 0, "mat-error")(35, RegisterComponent_Conditional_35_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-form-field", 6)(37, "mat-label");
        \u0275\u0275text(38, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 12);
        \u0275\u0275elementStart(40, "mat-icon", 8);
        \u0275\u0275text(41, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 11);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_42_listener() {
          return ctx.hidePassword2 = !ctx.hidePassword2;
        });
        \u0275\u0275elementStart(43, "mat-icon");
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, RegisterComponent_Conditional_45_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 13);
        \u0275\u0275template(47, RegisterComponent_Conditional_47_Template, 1, 0, "mat-spinner", 14)(48, RegisterComponent_Conditional_48_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "p", 15);
        \u0275\u0275text(50, " Already have an account? ");
        \u0275\u0275elementStart(51, "a", 16);
        \u0275\u0275text(52, "Log in");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(14, ctx.form.controls.username.hasError("required") && ctx.form.controls.username.touched ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(15, ctx.form.controls.username.hasError("minlength") && ctx.form.controls.username.touched ? 15 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(22, ctx.form.controls.email.hasError("required") && ctx.form.controls.email.touched ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, ctx.form.controls.email.hasError("email") && ctx.form.controls.email.touched ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(24, ctx.form.controls.email.hasError("kbtuEmail") && ctx.form.controls.email.touched ? 24 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(34, ctx.form.controls.password.hasError("required") && ctx.form.controls.password.touched ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.form.controls.password.hasError("minlength") && ctx.form.controls.password.touched ? 35 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword2 ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword2 ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(45, ctx.form.hasError("passwordMismatch") && ctx.form.controls.password2.touched ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(47, ctx.loading ? 47 : 48);
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
    ], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 64px - 80px);\n  padding: 32px 16px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 40px 36px;\n}\n.auth-card__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.auth-card__title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: var(--color-text);\n}\n.auth-card__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.auth-card__submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 44px;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.auth-card__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=register.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 39 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-X7JJC4YE.js.map
