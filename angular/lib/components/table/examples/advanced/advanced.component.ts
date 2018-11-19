import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-advanced',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="card">
    <div class="card-body">
      <div class="e-advanced-table">
        <div class="d-flex mb-3">
          <div class="mr-3" style="flex-grow: 1;">
            <form class="form-inline">
              <div class="input-with-ico w-100">
                <i class="input-ico fa fa-fw fa-search"></i>
                <div class="input-group flex-nowrap w-100">
                  <input class="form-control w-100" name="search" type="search" [(ngModel)]="filters.search" placeholder="Search">
                  <span *ngIf="filters.search.length" class="input-group-append">
                    <button class="btn btn-secondary" type="button" (click)="clearSearch()">
                      <i class="fa fa-times"></i>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div class="btn-group">
              <button type="button" class="btn btn-success">
                <span>
                  <i class="fa fa-plus"></i>
                  <span class="d-none d-md-inline-block ml-1">Create</span>
                </span>
              </button>
              <div class="btn-group" ngbDropdown placement="bottom-right">
                <button class="btn btn-success" ngbDropdownToggle></button>
                <div class="dropdown-menu" ngbDropdownMenu>
                  <h6 class="dropdown-header">With selected:</h6>
                  <a class="dropdown-item" href="" (click)="$event.preventDefault()">Remove</a>
                  <div class="dropdown-divider"></div>
                  <h6 class="dropdown-header">Toggle:</h6>
                  <a class="dropdown-item" href="" (click)="$event.preventDefault()">Status</a>
                  <a class="dropdown-item" href="" (click)="$event.preventDefault()">Bookmark</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row flex-lg-nowrap">
          <div class="col">
            <e-navlist  activeBold={{true}}>
              <ul class="nav">
                <li class="nav-item" [class.active]="tab == 'all'">
                  <a href="" class="nav-link text-nowrap" (click)="$event.preventDefault(); tab = 'all'">
                    <span>All</span>
                    <small>/ {{ tabs.all.length }}</small>
                  </a>
                </li>
                <li class="nav-item" [class.active]="tab == 'bookmarks'">
                  <a href="" class="nav-link text-nowrap" (click)="$event.preventDefault(); tab = 'bookmarks'">
                    <span>Bookmarks</span>
                    <small>/ {{ tabs.bookmarks.length }}</small>
                  </a>
                </li>
                <li class="nav-item" [class.active]="tab == 'selected'">
                  <a href="" class="nav-link text-nowrap" (click)="$event.preventDefault(); tab = 'selected'">
                    <span>Selected</span>
                    <small>/ {{ tabs.selected.length }}</small>
                  </a>
                </li>
              </ul>
            </e-navlist>
            <hr class="mb-3">
            <div class="px-2">
              <div class="custom-control custom-checkbox m-0">
                <input type="checkbox" class="custom-control-input" id="actives-check" name="actives" [(ngModel)]="filters.actives">
                <label class="custom-control-label" for="actives-check">Actives Only</label>
              </div>
            </div>
            <hr class="my-3 d-md-none">
          </div>
          <div class="col-12 col-md-9">
            <e-table
              [items]="tabs[tab]"
              [columns]="columns"
              [pagination]="true"
              [limit]="5"
              [tableClass]="'table table-bordered'"
              [paginationClass]="'pagination pagination-sm pagination-separated justify-content-center mb-0'"
              [responsive]="true">
              <ng-template head-template prop="check">
                <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="all-items"
                    id="all-items"
                    [checked]="tabs.selected.length === tabs.all.length"
                    (change)="selectAll($event.target.checked)" />
                  <label class="custom-control-label" for="all-items"></label>
                </div>
              </ng-template>
              <ng-template cell-template let-row="row" let-index="index" prop="check">
                <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    [id]="'item-' + index"
                    [(ngModel)]="row.selected" />
                  <label class="custom-control-label" [for]="'item-' + index"></label>
                </div>
              </ng-template>
              <ng-template cell-template let-row prop="date">{{ row.date * 1000 | date: 'mediumDate' }}</ng-template>
              <ng-template cell-template let-row prop="status">
                <span [ngClass]="{'badge': true, 'badge-light': !row.status, 'badge-secondary': row.status}">{{ row.status }}</span>
              </ng-template>
              <ng-template cell-template let-row prop="bookmark">
                <span class="e-advanced-table__bookmark" [class.active]="row.bookmark">
                <i
                  class="fa fa-bookmark fa-fw"
                  (click)="toggleBookmark(row)"></i>
                </span>
              </ng-template>
            </e-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./advanced.css']
})
export class TableAdvancedComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  public filters: any = {
    search: '',
    actives: false
  }

  public tab: string = 'all';

  public get tabs() {
    let all = this.items.slice()

    if (this.filters.search) {
      all = this.searchItems(all, this.filters.search, ['name'])
    }
    if (this.filters.actives) {
      all = all.filter(item => item.status)
    }

    return {
      all,
      bookmarks: all.filter(i => i.bookmark),
      selected: all.filter(i => i.selected)
    }
  }

  public toggleSelected(item: any): void {
    if (item) {
      item.selected = !item.selected;
    }
  }

  public selectAll(value: boolean): void {
    this.tabs[this.tab].map((i) => i.selected = value)
  }

  public toggleBookmark(item: any): void {
    if (item) {
      item.bookmark = !item.bookmark;
    }
  }

  // filters the given array of objects with a provided text and fields
  public searchItems(array, query, fields = []): object[] {
    if (!array.length || !String(query)) {
      return array
    }

    return array.filter(item => {
      let found = false;
      for (let key in item) {
        if (fields.length && fields.indexOf(key) < 0) {
          continue
        }
        if (typeof item[key] === 'string' &&
            item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          found = true;
        }
      }
      return found;
    })
  }

  public clearSearch(): void {
    this.filters.search = '';
  }

  public items: any = [
    { id: 1,  name: 'Adam Cotter',       date: 1512792908, status: true,  bookmark: false },
    { id: 2,  name: 'Pauline Noble',     date: 1516977768, status: false, bookmark: true,  selected: true },
    { id: 3,  name: 'Sherilyn Metzel',   date: 1517042476, status: true,  bookmark: false, selected: true },
    { id: 4,  name: 'Terrie Boaler',     date: 1516439865, status: true,  bookmark: false },
    { id: 5,  name: 'Rutter Pude',       date: 1515850922, status: false, bookmark: true  },
    { id: 6,  name: 'Clifford Benjamin', date: 1516898701, status: true,  bookmark: false },
    { id: 7,  name: 'Thedric Romans',    date: 1515707885, status: false, bookmark: true  },
    { id: 8,  name: 'Haily Carthew',     date: 1517056707, status: true,  bookmark: false },
    { id: 9,  name: 'Dorothea Joicey',   date: 1513090469, status: true,  bookmark: false },
    { id: 10, name: 'Mikaela Pinel',     date: 1512892304, status: false, bookmark: true  },
    { id: 11, name: 'Donnell Farries',   date: 1512299369, status: true,  bookmark: false },
    { id: 12, name: 'Letizia Puncher',   date: 1512769349, status: false, bookmark: true  },
    { id: 13, name: 'Kania Yallowley',   date: 1515521487, status: true,  bookmark: false },
    { id: 14, name: 'Clay De Francesco', date: 1515012234, status: false, bookmark: true  },
    { id: 15, name: 'Ina Queree',        date: 1514458367, status: false, bookmark: true  },
    { id: 16, name: 'Rasia Awty',        date: 1516943842, status: false, bookmark: true  },
    { id: 17, name: 'Basil Crosham',     date: 1512108299, status: true,  bookmark: false },
    { id: 18, name: 'Alexis Dodworth',   date: 1516814115, status: false, bookmark: true  },
    { id: 19, name: 'Greg Onyon',        date: 1517071308, status: true,  bookmark: false },
    { id: 20, name: 'Barry Carbett',     date: 1515450742, status: true,  bookmark: false },
    { id: 21, name: 'Carlyle Adran',     date: 1512498261, status: true,  bookmark: false },
    { id: 22, name: 'Guillaume Petel',   date: 1512742913, status: false, bookmark: true  },
    { id: 23, name: 'Wendeline Glasner', date: 1513319267, status: false, bookmark: true  },
    { id: 24, name: 'Sylvia Petrollo',   date: 1516080489, status: false, bookmark: true  },
    { id: 25, name: 'Meade Quoit',       date: 1513972299, status: true,  bookmark: false },
    { id: 26, name: 'Eugine Planke',     date: 1515488407, status: false, bookmark: true  },
    { id: 27, name: 'Thoma Drakeley',    date: 1515023660, status: false, bookmark: true  },
    { id: 28, name: 'Web Margetson',     date: 1513557231, status: true,  bookmark: false },
    { id: 29, name: 'Erskine Stivens',   date: 1515233788, status: true,  bookmark: false },
    { id: 30, name: 'Jedidiah Emmer',    date: 1512614842, status: false, bookmark: true  },
    { id: 31, name: 'Wolfie Drakers',    date: 1512381522, status: false, bookmark: true  },
    { id: 32, name: 'Allie Quiney',      date: 1515488202, status: true,  bookmark: false }
  ]

  public columns = [
    {
      prop: 'check',
      cellClass: 'text-center'
    },
    {
      prop: 'name',
      label: 'Name',
      headerClass: 'max-width',
      cellClass: 'text-nowrap'
    },
    {
      prop: 'date',
      label: 'Date',
      cellClass: 'text-nowrap',
      sortable: true
    },
    {
      prop: 'status',
      label: 'Status',
      cellClass: 'text-center'
    },
    {
      prop: 'bookmark',
      label: ' ',
      cellClass: 'text-center'
    }
  ]
}
