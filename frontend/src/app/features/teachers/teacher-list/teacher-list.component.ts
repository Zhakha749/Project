import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { TeacherService } from '../../../core/services/teacher.service';
import { SubjectService } from '../../../core/services/subject.service';
import { TeacherCardComponent } from '../../../shared/components/teacher-card/teacher-card.component';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';
import { Teacher, Subject as SubjectModel } from '../../../core/models';

const AGE_RANGES = ['20-30', '30-40', '40-50', '50-60', '60+'];

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatSelectModule, MatButtonModule, MatIconModule,
    MatPaginatorModule, MatDividerModule,
    TeacherCardComponent, LoadingSpinnerComponent,
  ],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent implements OnInit, OnDestroy {
  private readonly svc        = inject(TeacherService);
  private readonly subjectSvc = inject(SubjectService);
  private readonly fb         = inject(FormBuilder);
  private readonly route      = inject(ActivatedRoute);
  private readonly destroy$   = new Subject<void>();

  readonly ageRanges = AGE_RANGES;

  teachers  = signal<Teacher[]>([]);
  total     = signal(0);
  loading   = signal(true);
  subjects  = signal<SubjectModel[]>([]);
  pageSize  = 20;
  pageIndex = 0;

  filters = this.fb.group({
    search:    [''],
    ageRanges: this.fb.group(Object.fromEntries(AGE_RANGES.map(r => [r, false]))),
    subjectId: [null as number | null],
    ordering:  ['-average_ratings__overall'],
  });

  readonly sortOptions = [
    { value: '-average_ratings__overall', label: 'Highest rating' },
    { value: 'average_ratings__overall',  label: 'Lowest rating' },
    { value: 'full_name',                 label: 'Name A → Z' },
    { value: '-full_name',                label: 'Name Z → A' },
  ];

  ngOnInit(): void {
    const qSearch = this.route.snapshot.queryParamMap.get('search');
    if (qSearch) this.filters.get('search')!.setValue(qSearch);

    this.subjectSvc.getAll().subscribe(r => this.subjects.set(r.results));

    this.filters.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      startWith(this.filters.value),
      takeUntil(this.destroy$),
    ).subscribe(() => { this.pageIndex = 0; this.fetch(); });
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

  onPageChange(e: PageEvent): void {
    this.pageIndex = e.pageIndex;
    this.pageSize  = e.pageSize;
    this.fetch();
  }

  clearFilters(): void {
    this.filters.reset({
      search: '', ageRanges: Object.fromEntries(AGE_RANGES.map(r => [r, false])),
      subjectId: null, ordering: '-average_ratings__overall',
    });
  }

  private fetch(): void {
    this.loading.set(true);
    const { search, ageRanges, subjectId, ordering } = this.filters.value;
    const selectedAges = AGE_RANGES.filter(r => (ageRanges as Record<string, boolean>)[r]);

    this.svc.getAll({
      search:    search || undefined,
      age_range: selectedAges.length === 1 ? selectedAges[0] : undefined,
      subject:   subjectId ?? undefined,
      ordering:  ordering || undefined,
      page:      this.pageIndex + 1,
    }).subscribe({
      next: res => { this.teachers.set(res.results); this.total.set(res.count); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
}
