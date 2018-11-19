import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-basic',
  encapsulation: ViewEncapsulation.None,
  template: `
    <e-panel [title]="'New Users'" [subtitle]="'For the week'">
      <div actions>
        <small class="text-muted">{{ tableStatus }}</small>
      </div>
      <div class="mt-3">
        <e-table
          [items]="items"
          [columns]="columns"
          [pagination]="true"
          [(page)]="page"
          [limit]="limit"
          [tableClass]="'table table-bordered'"
          [paginationClass]="'pagination pagination-sm pagination-separated justify-content-center mb-0'"
          [responsive]="true">
          <ng-template cell-template let-row prop="index">{{ indexOf(row) }}</ng-template>
          <ng-template cell-template let-row prop="date">{{ row.date * 1000 | date: 'mediumDate' }}</ng-template>
          <ng-template cell-template let-row prop="status">
            <span [ngClass]="{'badge': true, 'badge-light': row.status, 'badge-secondary': !row.status}">{{ row.status }}</span>
          </ng-template>
        </e-table>
      </div>
    </e-panel>
  `
})
export class TableBasicComponent implements OnInit {

  public page: number = 1;
  public limit: number = 3;

  public get tableStatus() {
    let itemsTotal = this.items.length,
        itemsFrom = (this.limit * (this.page - 1)) + 1,
        itemsTo = Math.min(itemsFrom + this.limit - 1, itemsTotal);
    return `${itemsFrom} - ${itemsTo} of ${itemsTotal}`
  }

  public indexOf(row) {
    return this.items.indexOf(row) + 1;
  }

  public items: any = [
    { name: 'Adam Cotter',        date: 1512792908, status: true  },
    { name: 'Pauline Noble',      date: 1516977768, status: false },
    { name: 'Sherilyn Metzel',    date: 1517042476, status: true  },
    { name: 'Terrie Boaler',      date: 1516439865, status: true  },
    { name: 'Rutter Pude',        date: 1515850922, status: false },
    { name: 'Clifford Benjamin',  date: 1516898701, status: true  },
    { name: 'Thedric Romans',     date: 1515707885, status: false },
    { name: 'Haily Carthew',      date: 1517056707, status: true  },
    { name: 'Dorothea Joicey',    date: 1513090469, status: true  },
    { name: 'Mikaela Pinel',      date: 1512892304, status: false },
    { name: 'Donnell Farries',    date: 1512299369, status: true  },
    { name: 'Letizia Puncher',    date: 1512769349, status: false },
    { name: 'Kania Yallowley',    date: 1515521487, status: true  },
    { name: 'Clay De Francesco',  date: 1515012234, status: false },
    { name: 'Ina Queree',         date: 1514458367, status: false },
    { name: 'Rasia Awty',         date: 1516943842, status: false },
    { name: 'Basil Crosham',      date: 1512108299, status: true  },
    { name: 'Alexis Dodworth',    date: 1516814115, status: false },
    { name: 'Greg Onyon',         date: 1517071308, status: true  },
    { name: 'Barry Carbett',      date: 1515450742, status: true  },
    { name: 'Carlyle Adran',      date: 1512498261, status: true  },
    { name: 'Guillaume Petel',    date: 1512742913, status: false },
    { name: 'Wendeline Glasner',  date: 1513319267, status: false },
    { name: 'Sylvia Petrollo',    date: 1516080489, status: false },
    { name: 'Meade Quoit',        date: 1513972299, status: true  },
    { name: 'Eugine Planke',      date: 1515488407, status: false },
    { name: 'Thoma Drakeley',     date: 1515023660, status: false },
    { name: 'Web Margetson',      date: 1513557231, status: true  },
    { name: 'Erskine Stivens',    date: 1515233788, status: true  },
    { name: 'Jedidiah Emmer',     date: 1512614842, status: false },
    { name: 'Wolfie Drakers',     date: 1512381522, status: false },
    { name: 'Allie Quiney',       date: 1515488202, status: true  }
  ]

  public columns = [
    {
      prop: 'index',
      label: '#',
      headerClass: 'text-center',
      cellClass: 'text-center'
    },
    {
      prop: 'name',
      label: 'Name',
      headerClass: 'max-width',
      cellClass: 'text-nowrap',
      sortable: true
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
    }
  ]

  constructor() { }

  ngOnInit() {}

}
