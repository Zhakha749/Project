import {
  SubjectService
} from "./chunk-DH32MYIY.js";
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
  AuthService
} from "./chunk-HQ5XUSHA.js";
import {
  MatSnackBar
} from "./chunk-QFF2GCGT.js";
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
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DDA5LCZW.js";
import {
  animate,
  animateChild,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-PKU3V226.js";
import {
  DifficultyBarComponent
} from "./chunk-EG4BVBL4.js";
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
  MatButtonModule,
  MatIconAnchor,
  MatIconButton
} from "./chunk-FT2AHD6T.js";
import {
  environment
} from "./chunk-ZAEJD2HQ.js";
import {
  AnimationCurves,
  AnimationDurations,
  AriaDescriber,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  Directive,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  MatOption,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SPACE,
  SkipSelf,
  Subject,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  input,
  merge,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FJ3HNCAF.js";

// node_modules/@angular/material/fesm2022/sort.mjs
var _c0 = ["mat-sort-header", ""];
var _c1 = ["*"];
function MatSortHeader_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("@arrowPosition.start", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_start_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_Conditional_3_Template_div_animation_arrowPosition_done_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._disableViewStateAnimation = false);
    });
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4);
    \u0275\u0275element(3, "div", 5)(4, "div", 6)(5, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("@arrowOpacity", ctx_r1._getArrowViewState())("@arrowPosition", ctx_r1._getArrowViewState())("@allowChildren", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance(2);
    \u0275\u0275property("@indicator", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance();
    \u0275\u0275property("@leftPointer", ctx_r1._getArrowDirectionState());
    \u0275\u0275advance();
    \u0275\u0275property("@rightPointer", ctx_r1._getArrowDirectionState());
  }
}
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}
var MAT_SORT_DEFAULT_OPTIONS = new InjectionToken("MAT_SORT_DEFAULT_OPTIONS");
var MatSort = class _MatSort {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== "asc" && direction !== "desc" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  constructor(_defaultOptions) {
    this._defaultOptions = _defaultOptions;
    this._initializedStream = new ReplaySubject(1);
    this.sortables = /* @__PURE__ */ new Map();
    this._stateChanges = new Subject();
    this.start = "asc";
    this._direction = "";
    this.disabled = false;
    this.sortChange = new EventEmitter();
    this.initialized = this._initializedStream;
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return "";
    }
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._initializedStream.next();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._initializedStream.complete();
  }
  static {
    this.\u0275fac = function MatSort_Factory(t) {
      return new (t || _MatSort)(\u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatSort,
      selectors: [["", "matSort", ""]],
      hostAttrs: [1, "mat-sort"],
      inputs: {
        active: [InputFlags.None, "matSortActive", "active"],
        start: [InputFlags.None, "matSortStart", "start"],
        direction: [InputFlags.None, "matSortDirection", "direction"],
        disableClear: [InputFlags.HasDecoratorInputTransform, "matSortDisableClear", "disableClear", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "matSortDisabled", "disabled", booleanAttribute]
      },
      outputs: {
        sortChange: "matSortChange"
      },
      exportAs: ["matSort"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSort, [{
    type: Directive,
    args: [{
      selector: "[matSort]",
      exportAs: "matSort",
      host: {
        "class": "mat-sort"
      },
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    active: [{
      type: Input,
      args: ["matSortActive"]
    }],
    start: [{
      type: Input,
      args: ["matSortStart"]
    }],
    direction: [{
      type: Input,
      args: ["matSortDirection"]
    }],
    disableClear: [{
      type: Input,
      args: [{
        alias: "matSortDisableClear",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matSortDisabled",
        transform: booleanAttribute
      }]
    }],
    sortChange: [{
      type: Output,
      args: ["matSortChange"]
    }]
  });
})();
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ["asc", "desc"];
  if (start == "desc") {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push("");
  }
  return sortOrder;
}
var SORT_ANIMATION_TRANSITION = AnimationDurations.ENTERING + " " + AnimationCurves.STANDARD_CURVE;
var matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: trigger("indicator", [
    state("active-asc, asc", style({
      transform: "translateY(0px)"
    })),
    // 10px is the height of the sort indicator, minus the width of the pointers
    state("active-desc, desc", style({
      transform: "translateY(10px)"
    })),
    transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: trigger("leftPointer", [state("active-asc, asc", style({
    transform: "rotate(-45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: trigger("rightPointer", [state("active-asc, asc", style({
    transform: "rotate(45deg)"
  })), state("active-desc, desc", style({
    transform: "rotate(-45deg)"
  })), transition("active-asc <=> active-desc", animate(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: trigger("arrowOpacity", [
    state("desc-to-active, asc-to-active, active", style({
      opacity: 1
    })),
    state("desc-to-hint, asc-to-hint, hint", style({
      opacity: 0.54
    })),
    state("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void", style({
      opacity: 0
    })),
    // Transition between all states except for immediate transitions
    transition("* => asc, * => desc, * => active, * => hint, * => void", animate("0ms")),
    transition("* <=> *", animate(SORT_ANIMATION_TRANSITION))
  ]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: trigger("arrowPosition", [
    // Hidden Above => Hint Center
    transition("* => desc-to-hint, * => desc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(-25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Below
    transition("* => hint-to-desc, * => active-to-desc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(25%)"
    })]))),
    // Hidden Below => Hint Center
    transition("* => asc-to-hint, * => asc-to-active", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(25%)"
    }), style({
      transform: "translateY(0)"
    })]))),
    // Hint Center => Hidden Above
    transition("* => hint-to-asc, * => active-to-asc", animate(SORT_ANIMATION_TRANSITION, keyframes([style({
      transform: "translateY(0)"
    }), style({
      transform: "translateY(-25%)"
    })]))),
    state("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active", style({
      transform: "translateY(0)"
    })),
    state("hint-to-desc, active-to-desc, desc", style({
      transform: "translateY(-25%)"
    })),
    state("hint-to-asc, active-to-asc, asc", style({
      transform: "translateY(25%)"
    }))
  ]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: trigger("allowChildren", [transition("* <=> *", [query("@*", animateChild(), {
    optional: true
  })])])
};
var MatSortHeaderIntl = class _MatSortHeaderIntl {
  constructor() {
    this.changes = new Subject();
  }
  static {
    this.\u0275fac = function MatSortHeaderIntl_Factory(t) {
      return new (t || _MatSortHeaderIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatSortHeaderIntl,
      factory: _MatSortHeaderIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeaderIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
var MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new Optional(), new SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};
var MatSortHeader = class _MatSortHeader {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  constructor(_intl, _changeDetectorRef, _sort, _columnDef, _focusMonitor, _elementRef, _ariaDescriber, defaultOptions) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._showIndicatorHint = false;
    this._viewState = {};
    this._arrowDirection = "";
    this._disableViewStateAnimation = false;
    this.arrowPosition = "after";
    this.disabled = false;
    this._sortActionDescription = "Sort";
    if (!_sort && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? "active" : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector(".mat-sort-header-container");
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((origin) => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
    }
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "hint"
        });
      } else {
        this._setAnimationTransitionState({
          fromState: "hint",
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === SPACE || event.keyCode === ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === "asc" || this._sort.direction === "desc");
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? "active-" : ""}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : "") + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return "none";
    }
    return this._sort.direction == "asc" ? "ascending" : "descending";
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    if (this._sortButton) {
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = merge(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        if (this._viewState.toState === "hint" || this._viewState.toState === "active") {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: "active"
        });
        this._showIndicatorHint = false;
      }
      if (!this._isSorted() && this._viewState && this._viewState.toState === "active") {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: "active",
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  static {
    this.\u0275fac = function MatSortHeader_Factory(t) {
      return new (t || _MatSortHeader)(\u0275\u0275directiveInject(MatSortHeaderIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSort, 8), \u0275\u0275directiveInject("MAT_SORT_HEADER_COLUMN_DEF", 8), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AriaDescriber, 8), \u0275\u0275directiveInject(MAT_SORT_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatSortHeader,
      selectors: [["", "mat-sort-header", ""]],
      hostAttrs: [1, "mat-sort-header"],
      hostVars: 3,
      hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatSortHeader_click_HostBindingHandler() {
            return ctx._handleClick();
          })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(true);
          })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
            return ctx._setIndicatorHintVisible(false);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-sort", ctx._getAriaSortAttribute());
          \u0275\u0275classProp("mat-sort-header-disabled", ctx._isDisabled());
        }
      },
      inputs: {
        id: [InputFlags.None, "mat-sort-header", "id"],
        arrowPosition: "arrowPosition",
        start: "start",
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        sortActionDescription: "sortActionDescription",
        disableClear: [InputFlags.HasDecoratorInputTransform, "disableClear", "disableClear", booleanAttribute]
      },
      exportAs: ["matSortHeader"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 7,
      consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
      template: function MatSortHeader_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
          \u0275\u0275template(3, MatSortHeader_Conditional_3_Template, 6, 6, "div", 2);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classProp("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
          \u0275\u0275attribute("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
          \u0275\u0275advance(3);
          \u0275\u0275conditional(3, ctx._renderArrow() ? 3 : -1);
        }
      },
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
      encapsulation: 2,
      data: {
        animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortHeader, [{
    type: Component,
    args: [{
      selector: "[mat-sort-header]",
      exportAs: "matSortHeader",
      host: {
        "class": "mat-sort-header",
        "(click)": "_handleClick()",
        "(keydown)": "_handleKeydown($event)",
        "(mouseenter)": "_setIndicatorHintVisible(true)",
        "(mouseleave)": "_setIndicatorHintVisible(false)",
        "[attr.aria-sort]": "_getAriaSortAttribute()",
        "[class.mat-sort-header-disabled]": "_isDisabled()"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      standalone: true,
      template: '<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button\'s `aria-label`\n  will be read out as the user is navigating the table\'s cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class="mat-sort-header-container mat-focus-indicator"\n     [class.mat-sort-header-sorted]="_isSorted()"\n     [class.mat-sort-header-position-before]="arrowPosition === \'before\'"\n     [attr.tabindex]="_isDisabled() ? null : 0"\n     [attr.role]="_isDisabled() ? null : \'button\'">\n\n  <!--\n    TODO(crisbeto): this div isn\'t strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn\'t visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class="mat-sort-header-content">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  @if (_renderArrow()) {\n    <div class="mat-sort-header-arrow"\n        [@arrowOpacity]="_getArrowViewState()"\n        [@arrowPosition]="_getArrowViewState()"\n        [@allowChildren]="_getArrowDirectionState()"\n        (@arrowPosition.start)="_disableViewStateAnimation = true"\n        (@arrowPosition.done)="_disableViewStateAnimation = false">\n      <div class="mat-sort-header-stem"></div>\n      <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">\n        <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>\n        <div class="mat-sort-header-pointer-middle"></div>\n      </div>\n    </div>\n  }\n</div>\n',
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;color:var(--mat-sort-arrow-color);opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], () => [{
    type: MatSortHeaderIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: MatSort,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: ["MAT_SORT_HEADER_COLUMN_DEF"]
    }, {
      type: Optional
    }]
  }, {
    type: FocusMonitor
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_SORT_DEFAULT_OPTIONS]
    }]
  }], {
    id: [{
      type: Input,
      args: ["mat-sort-header"]
    }],
    arrowPosition: [{
      type: Input
    }],
    start: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    sortActionDescription: [{
      type: Input
    }],
    disableClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatSortModule = class _MatSortModule {
  static {
    this.\u0275fac = function MatSortModule_Factory(t) {
      return new (t || _MatSortModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatSortModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_SORT_HEADER_INTL_PROVIDER],
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSortModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatSort, MatSortHeader],
      exports: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/app/core/services/material.service.ts
var MaterialService = class _MaterialService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = `${environment.apiUrl}/materials`;
  }
  getApproved(subjectId) {
    return this.http.get(`${this.base}/`, {
      params: { subject: subjectId.toString() }
    });
  }
  submit(formData) {
    return this.http.post(`${this.base}/`, formData);
  }
  static {
    this.\u0275fac = function MaterialService_Factory(t) {
      return new (t || _MaterialService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaterialService, factory: _MaterialService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/subjects/subject-detail/subject-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c02 = (a0) => ["/teachers", a0];
var _c12 = (a0) => ["/course", a0];
function SubjectDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading-spinner", 0);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 25);
    \u0275\u0275listener("ngSubmit", function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_46_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.submitMaterial());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 26)(2, "mat-label");
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 26)(6, "mat-label");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 28)(9, "mat-option", 29);
    \u0275\u0275text(10, "Lecture Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 30);
    \u0275\u0275text(12, "Past Exams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 31);
    \u0275\u0275text(14, "Book/Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 32);
    \u0275\u0275text(16, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "mat-form-field", 26)(18, "mat-label");
    \u0275\u0275text(19, "Link (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-icon", 33);
    \u0275\u0275text(21, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 35);
    \u0275\u0275text(24, " Submit for review ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r1.materialForm);
    \u0275\u0275advance(23);
    \u0275\u0275property("disabled", ctx_r1.submittingMaterial());
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No approved materials yet. Be the first to contribute!");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_For_50_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38)(1, "mat-icon");
    \u0275\u0275text(2, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Open ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", m_r4.link, \u0275\u0275sanitizeUrl);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div")(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SubjectDetailComponent_Conditional_1_Conditional_0_For_50_Conditional_8_Template, 4, 1, "a", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.title);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("sdetail__mat-type badge badge--", m_r4.type === "lecture" ? "major" : "elective", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r4.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" by ", m_r4.contributor_name, " \xB7 karma ", m_r4.contributor_karma, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, m_r4.link ? 8 : -1);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "No teachers recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Teacher");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51)(1, "a", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c02, row_r6.teacher_id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.teacher_name);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, "Difficulty");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, row_r7.avg_difficulty, "1.1-1"), "/10");
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, "Rating");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275element(1, "app-rating-badge", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", row_r8.avg_rating);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 53);
    \u0275\u0275text(1, "Grade avg");
    \u0275\u0275elementEnd();
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r9.grade_avg, "1.2-2"));
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 50);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 51)(1, "a", 55)(2, "mat-icon");
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 56);
    \u0275\u0275listener("click", function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_15_Template_button_click_4_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.goToCompare(row_r11.course_instance_id));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "compare_arrows");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c12, row_r11.course_instance_id));
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 57);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 58);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 39);
    \u0275\u0275listener("matSortChange", function SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_Template_table_matSortChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.sortTeachers($event));
    });
    \u0275\u0275elementContainerStart(1, 40);
    \u0275\u0275template(2, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_2_Template, 2, 0, "th", 41)(3, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_3_Template, 3, 4, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 43);
    \u0275\u0275template(5, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_5_Template, 2, 0, "th", 44)(6, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_6_Template, 3, 4, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 45);
    \u0275\u0275template(8, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_8_Template, 2, 0, "th", 44)(9, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_9_Template, 2, 1, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 46);
    \u0275\u0275template(11, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_11_Template, 2, 0, "th", 44)(12, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_12_Template, 3, 4, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 47);
    \u0275\u0275template(14, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_th_14_Template, 1, 0, "th", 41)(15, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_td_15_Template, 7, 3, "td", 42);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_tr_16_Template, 1, 0, "tr", 48)(17, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_tr_17_Template, 1, 0, "tr", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("dataSource", ctx_r1.teachers());
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.teacherCols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.teacherCols);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "div")(3, "div", 3)(4, "a", 4);
    \u0275\u0275text(5, "Subjects");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "section", 10)(17, "h2", 11);
    \u0275\u0275text(18, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "section", 10)(22, "h2", 11);
    \u0275\u0275text(23, "Difficulty profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13)(25, "span");
    \u0275\u0275text(26, "Overall difficulty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-difficulty-bar", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13)(29, "span", 15);
    \u0275\u0275text(30, " Teacher dependency ");
    \u0275\u0275elementStart(31, "mat-icon", 16);
    \u0275\u0275text(32, "info_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "span", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementStart(35, "span", 7);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "section", 10)(39, "div", 18)(40, "h2", 19);
    \u0275\u0275text(41, "Study Materials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 20);
    \u0275\u0275listener("click", function SubjectDetailComponent_Conditional_1_Conditional_0_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleMaterialForm());
    });
    \u0275\u0275elementStart(43, "mat-icon");
    \u0275\u0275text(44, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(46, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_46_Template, 25, 2, "form", 21)(47, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_47_Template, 2, 0, "p", 7);
    \u0275\u0275elementStart(48, "div", 22);
    \u0275\u0275repeaterCreate(49, SubjectDetailComponent_Conditional_1_Conditional_0_For_50_Template, 9, 8, "div", 23, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 24)(52, "section", 10)(53, "h2", 11);
    \u0275\u0275text(54, "Teachers for this subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_55_Template, 2, 0, "p", 7)(56, SubjectDetailComponent_Conditional_1_Conditional_0_Conditional_56_Template, 18, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r12 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" / ", s_r12.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("badge badge--", s_r12.category, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r12.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r12.credits, " credits");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r12.description);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", s_r12.overall_difficulty);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("dep-high", s_r12.teacher_dependency_ratio > 2)("dep-mid", s_r12.teacher_dependency_ratio > 1 && s_r12.teacher_dependency_ratio <= 2)("dep-low", s_r12.teacher_dependency_ratio <= 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.dependencyLabel(s_r12.teacher_dependency_ratio), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(\u03C3=", \u0275\u0275pipeBind2(37, 21, s_r12.teacher_dependency_ratio, "1.1-1"), ")");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showMaterialForm() ? "Cancel" : "Submit material", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(46, ctx_r1.showMaterialForm() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(47, ctx_r1.materials().length === 0 && !ctx_r1.showMaterialForm() ? 47 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.materials());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(55, ctx_r1.teachers().length === 0 ? 55 : 56);
  }
}
function SubjectDetailComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "p", 7);
    \u0275\u0275text(2, "Subject not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 60);
    \u0275\u0275text(4, "Back to subjects");
    \u0275\u0275elementEnd()();
  }
}
function SubjectDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SubjectDetailComponent_Conditional_1_Conditional_0_Template, 57, 24)(1, SubjectDetailComponent_Conditional_1_Conditional_1_Template, 5, 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, (tmp_1_0 = ctx_r1.subject()) ? 0 : 1, tmp_1_0);
  }
}
var SubjectDetailComponent = class _SubjectDetailComponent {
  constructor() {
    this.id = input.required();
    this.svc = inject(SubjectService);
    this.materialSvc = inject(MaterialService);
    this.auth = inject(AuthService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.subject = signal(null);
    this.materials = signal([]);
    this.loading = signal(true);
    this.teachers = signal([]);
    this.showMaterialForm = signal(false);
    this.submittingMaterial = signal(false);
    this.teacherCols = ["teacher_name", "avg_difficulty", "avg_rating", "grade_avg", "actions"];
    this.materialForm = this.fb.group({
      title: ["", Validators.required],
      type: ["lecture", Validators.required],
      link: [""]
    });
  }
  dependencyLabel(ratio) {
    if (ratio > 2)
      return "High";
    if (ratio > 1)
      return "Medium";
    return "Low";
  }
  ngOnInit() {
    this.svc.getById(+this.id()).subscribe({
      next: (s) => {
        this.subject.set(s);
        this.teachers.set(s.teachers ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(["/subjects"]);
      }
    });
    this.materialSvc.getApproved(+this.id()).subscribe((r) => this.materials.set(r.results));
  }
  sortTeachers(sort) {
    const data = [...this.teachers()];
    if (!sort.active || sort.direction === "") {
      this.teachers.set(data);
      return;
    }
    this.teachers.set(data.sort((a, b) => {
      const dir = sort.direction === "asc" ? 1 : -1;
      return (a[sort.active] - b[sort.active]) * dir;
    }));
  }
  goToCompare(ciId) {
    this.router.navigate(["/compare"], { queryParams: { ids: ciId } });
  }
  toggleMaterialForm() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(["/login"]);
      return;
    }
    this.showMaterialForm.update((v) => !v);
  }
  submitMaterial() {
    if (this.materialForm.invalid) {
      this.materialForm.markAllAsTouched();
      return;
    }
    this.submittingMaterial.set(true);
    const fd = new FormData();
    fd.append("title", this.materialForm.value.title);
    fd.append("type", this.materialForm.value.type);
    fd.append("link", this.materialForm.value.link ?? "");
    fd.append("subject", this.id());
    this.materialSvc.submit(fd).subscribe({
      next: () => {
        this.snack.open("Material submitted for review!", "Close", { duration: 4e3 });
        this.materialForm.reset({ type: "lecture" });
        this.showMaterialForm.set(false);
        this.submittingMaterial.set(false);
      },
      error: () => {
        this.snack.open("Submission failed.", "Close", { duration: 4e3, panelClass: ["error-snack"] });
        this.submittingMaterial.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function SubjectDetailComponent_Factory(t) {
      return new (t || _SubjectDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubjectDetailComponent, selectors: [["app-subject-detail"]], inputs: { id: [InputFlags.SignalBased, "id"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["minHeight", "400px"], [1, "sdetail__header"], [1, "page-container", "sdetail__header-inner"], [1, "sdetail__breadcrumb", "text-muted"], ["routerLink", "/subjects"], [1, "sdetail__title"], [1, "sdetail__meta"], [1, "text-muted"], [1, "page-container", "sdetail__body"], [1, "sdetail__col-left"], [1, "card", "sdetail__section"], [1, "sdetail__section-title"], [2, "margin", "0", "line-height", "1.65"], [1, "sdetail__diff-row"], [1, "sdetail__diff-bar", 3, "value"], ["matTooltip", "High means difficulty varies greatly between teachers"], [1, "sdetail__info-icon"], [1, "sdetail__dep-label"], [1, "sdetail__mat-header"], [1, "sdetail__section-title", 2, "margin", "0"], ["mat-stroked-button", "", 3, "click"], [1, "sdetail__mat-form", 3, "formGroup"], [1, "sdetail__mat-list"], [1, "sdetail__mat-item"], [1, "sdetail__col-right"], [1, "sdetail__mat-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", "subscriptSizing", "dynamic"], ["matInput", "", "formControlName", "title"], ["formControlName", "type"], ["value", "lecture"], ["value", "exam"], ["value", "book"], ["value", "other"], ["matPrefix", ""], ["matInput", "", "formControlName", "link", "placeholder", "https://\u2026"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "sdetail__mat-title"], [1, "sdetail__mat-meta", "text-muted"], ["target", "_blank", "mat-stroked-button", "", 3, "href"], ["mat-table", "", "matSort", "", 1, "sdetail__table", 3, "matSortChange", "dataSource"], ["matColumnDef", "teacher_name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "avg_difficulty"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "avg_rating"], ["matColumnDef", "grade_avg"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "value"], ["mat-icon-button", "", "matTooltip", "View course", 3, "routerLink"], ["mat-icon-button", "", "matTooltip", "Compare", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "page-container", 2, "padding-top", "40px"], ["mat-stroked-button", "", "routerLink", "/subjects"]], template: function SubjectDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, SubjectDetailComponent_Conditional_0_Template, 1, 0, "app-loading-spinner", 0)(1, SubjectDetailComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.loading() ? 0 : 1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButtonModule, MatAnchor, MatButton, MatIconAnchor, MatIconButton, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatSortModule, MatSort, MatSortHeader, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatTooltipModule, MatTooltip, DifficultyBarComponent, RatingBadgeComponent, LoadingSpinnerComponent], styles: ["\n\n.sdetail__header[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border-bottom: 1px solid var(--color-border);\n  padding: 28px 0;\n}\n.sdetail__header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sdetail__breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  margin-bottom: 6px;\n}\n.sdetail__breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.sdetail__title[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  margin: 0 0 8px;\n}\n.sdetail__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.sdetail__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 24px;\n  padding-top: 28px;\n  padding-bottom: 40px;\n}\n.sdetail__col-left[_ngcontent-%COMP%], .sdetail__col-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.sdetail__section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.sdetail__section-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 14px;\n}\n.sdetail__diff-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.88rem;\n  margin-bottom: 12px;\n}\n.sdetail__diff-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  width: 140px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sdetail__diff-bar[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sdetail__info-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n  color: var(--color-text-muted);\n}\n.sdetail__dep-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.sdetail__dep-label.dep-high[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.sdetail__dep-label.dep-mid[_ngcontent-%COMP%] {\n  color: #fb8c00;\n}\n.sdetail__dep-label.dep-low[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.sdetail__mat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.sdetail__mat-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-sm);\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.sdetail__mat-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 12px;\n}\n.sdetail__mat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 10px 14px;\n  background: var(--color-surface-2);\n  border-radius: var(--radius-sm);\n}\n.sdetail__mat-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sdetail__mat-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.sdetail__mat-type[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n}\n.sdetail__mat-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n}\n.sdetail__table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-weight: 600;\n  white-space: nowrap;\n  text-transform: capitalize;\n}\n.badge--mandatory[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.badge--elective[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.badge--major[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge--minor[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge--profile[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #880e4f;\n}\n@media (max-width: 900px) {\n  .sdetail__body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=subject-detail.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubjectDetailComponent, { className: "SubjectDetailComponent", filePath: "src\\app\\features\\subjects\\subject-detail\\subject-detail.component.ts", lineNumber: 35 });
})();
export {
  SubjectDetailComponent
};
//# sourceMappingURL=chunk-U4X57UH6.js.map
