import {
  Component, Directive,
  ContentChildren,
  QueryList,
  TemplateRef,
  Input, Output,
  EventEmitter,
  OnInit, AfterContentInit,
  ViewEncapsulation
} from '@angular/core';

@Directive({selector: '[head-template]'})
export class HeadTemplateDirective {
  @Input() prop: string;
  constructor(public template: TemplateRef<any>) {}
}

@Directive({selector: '[cell-template]'})
export class CellTemplateDirective {
  @Input() prop: string;
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'e-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ETableComponent implements OnInit, AfterContentInit {

  @Input() items: object[];
  @Input() columns: any;
  @Input() limit: number;
  @Input() page: number = 1;
  @Input() pagination: boolean = false;
  @Input() paginationClass: string = '';
  @Input() tableClass: string = 'table';
  @Input() responsive: boolean = false;
  @Output() pageChange = new EventEmitter<number>();

  @ContentChildren(HeadTemplateDirective) headTemplates: QueryList<HeadTemplateDirective>;
  @ContentChildren(CellTemplateDirective) cellTemplates: QueryList<CellTemplateDirective>;

  public sortOrders: object = {};
  public sortKey: string;

  public getHeaderClass(column): string {
    let headerClass = column.headerClass || '';
    if (column.sortable) {
      headerClass += ' sortable';
      if (this.sortKey === column.prop) {
        headerClass += this.sortOrders[column.prop] === -1 ? ' sortable--desc' : ' sortable--asc';
      }
    }
    return headerClass.trim();
  }

  public getHeadTemplate(prop: string): HeadTemplateDirective {
    return this.headTemplates.find((i) => i.prop === prop)
  }

  public getCellTemplate(prop: string): CellTemplateDirective {
    return this.cellTemplates.find((i) => i.prop === prop)
  }

  public sortBy(column): void {
    if (column.sortable) {
      const sortOrder = this.sortOrders[this.sortKey];
      this.sortKey = column.prop;
      this.sortOrders[this.sortKey] = sortOrder ? sortOrder * -1 : 1 ;
    }
  }

  public get sortedItems(): object[] {
    let sorted = this.items,
        sortKey = this.sortKey,
        sortOrder = this.sortOrders[this.sortKey] || 1;
    if (sortKey) {
      sorted = this.items.slice().sort(function(a, b) {
        a = a[sortKey]
        b = b[sortKey]
        return (a === b ? 0 : a > b ? 1 : -1) * sortOrder
      })
    }
    return sorted;
  }

  public get paginatedItems(): object[] {
    let paginated = this.sortedItems,
        page = this.page,
        perPage = this.limit || this.sortedItems.length,
        start = (page - 1) * perPage,
        end = start + perPage;
    if (this.pagination) {
      paginated = paginated.slice(start, end);
    }
    return paginated;
  }

  public onPageChange(value) {
    this.pageChange.emit(value);
  }

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}
}

@Component({
  selector: 'e-table-pagination',
  template: `
    <ul [attr.class]="class">
      <li class="page-item" [class.disabled]="page === 1">
        <a href="" class="page-link" (click)="$event.preventDefault(); setPage(1);">«</a>
      </li>
      <li class="page-item" [class.disabled]="!isValidPage(page - 1)">
        <a href="" class="page-link" (click)="$event.preventDefault(); setPage(page - 1);">‹</a>
      </li>
      <li
        *ngFor="let p of pages"
        class="page-item"
        [class.active]="p === page">
        <a href="" class="page-link" (click)="$event.preventDefault(); setPage(p);">{{ p }}</a>
      </li>
      <li class="page-item" [class.disabled]="!isValidPage(page + 1)">
        <a href="" class="page-link" (click)="$event.preventDefault(); setPage(page + 1);">›</a>
      </li>
      <li class="page-item" [class.disabled]="page >= pagesTotal">
        <a href="" class="page-link" (click)="$event.preventDefault(); setPage(pagesTotal);">»</a>
      </li>
    </ul>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'bs-table__pagination'
  }
})
export class ETablePaginationComponent implements OnInit {
  @Input() page: number = 1;
  @Input() perPage: number = 1;
  @Input() total: number = 1;
  @Input() pagesCount: number = 5;
  @Input() class: string = 'pagination';
  @Output() pageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public isValidPage(page: number): boolean {
    return page > 0 && page <= this.pagesTotal
  }

  public get pagesTotal(): number {
    return Math.ceil(this.total / this.perPage)
  }

  public get pages(): number[] {
    let pages = [this.page],
        pagesCount = Math.min(this.pagesCount, this.pagesTotal),
        i = 1;
    while(pages.length < pagesCount) {
      if (this.isValidPage(this.page + i)) {
        pages.push(this.page + i)
      }
      if (this.isValidPage(this.page - i)) {
        pages.push(this.page - i)
      }
      i++;
    }
    return pages.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
  }

  public setPage(page: number): void {
    if (page) {
      this.pageChange.emit(page);
    }
  }
}
