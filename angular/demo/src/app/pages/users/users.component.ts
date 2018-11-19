import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements AfterViewInit {

  constructor(private modalService: NgbModal) { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  public page: number = 1;
  public perPage: number = 12;

  public filters: any = {
    name: '',
    date: [],
    status: null
  }

  public _userToShow: any = {};
  public set userToShow(user) {
    this._userToShow = user;
  }
  public get userToShow() {
    return Object.assign({}, this._userToShow, {
      username: this._userToShow.name
        .split(' ').reverse()
        .map((str, i) => i > 0 ? str.charAt(0) : str)
        .join('.')
        .toLowerCase()
    });
  }

  public tab: string = 'all';

  public get tabs() {
    let all = this.items.slice()

    if (this.filters.name) {
      all = this.searchItems(all, this.filters.name, ['name'])
    }
    if (this.filters.status !== null) {
      all = all.filter(item => item.status === this.filters.status)
    }
    if (this.filters.date.length == 2) {
      all = all.filter(i => {
        let start = new Date(this.filters.date[0].getTime()).setHours(0,0,0,0),
            end = new Date(this.filters.date[1].getTime()).setHours(23,59,59,999);
        return i.date * 1000 >= start && i.date * 1000 <= end;
      })
    }

    return {
      all,
      active: all.filter(i => i.status),
      selected: all.filter(i => i.selected)
    }
  }

  public get minMaxDates() {
    let min = Number.POSITIVE_INFINITY,
        max = 0;
    this.items.map(item => {
      if (item.date < min) {
        min = item.date
      }
      if (item.date > max) {
        max = item.date
      }
    })
    return [min, max];
  }

  public toggleSelected(item: any): void {
    if (item) {
      item.selected = !item.selected;
    }
  }

  public selectAll(value: boolean): void {
    this.tabs[this.tab].map((i) => i.selected = value)
  }

  public toggleStatus(item: any): void {
    if (item) {
      item.status = !item.status;
    }
  }

  public openModal(modal, size: 'sm' | 'lg' = 'lg'): void {
    this.modalService.open(modal, { size: size })
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

  public items: any = [
    { id: 1,  name: 'Adam Cotter',        date: 1512792908, status: true,  photo: '' },
    { id: 2,  name: 'Pauline Noble',      date: 1516977768, status: false, photo: '' },
    { id: 3,  name: 'Sherilyn Metzel',    date: 1517042476, status: true,  photo: '' },
    { id: 4,  name: 'Terrie Boaler',      date: 1516439865, status: true,  photo: '' },
    { id: 5,  name: 'Rutter Pude',        date: 1515850922, status: false, photo: '' },
    { id: 6,  name: 'Clifford Benjamin',  date: 1516898701, status: true,  photo: '' },
    { id: 7,  name: 'Thedric Romans',     date: 1515707885, status: false, photo: '' },
    { id: 8,  name: 'Haily Carthew',      date: 1517056707, status: true,  photo: '' },
    { id: 9,  name: 'Dorothea Joicey',    date: 1513090469, status: true,  photo: '' },
    { id: 10, name: 'Mikaela Pinel',      date: 1512892304, status: false, photo: '' },
    { id: 11, name: 'Donnell Farries',    date: 1512299369, status: true,  photo: '' },
    { id: 12, name: 'Letizia Puncher',    date: 1512769349, status: false, photo: '' },
    { id: 13, name: 'Kania Yallowley',    date: 1515521487, status: true,  photo: '' },
    { id: 14, name: 'Clay De Francesco',  date: 1515012234, status: false, photo: '' },
    { id: 15, name: 'Ina Queree',         date: 1514458367, status: false, photo: '' },
    { id: 16, name: 'Rasia Awty',         date: 1516943842, status: false, photo: '' },
    { id: 17, name: 'Basil Crosham',      date: 1512108299, status: true,  photo: '' },
    { id: 18, name: 'Alexis Dodworth',    date: 1516814115, status: false, photo: '' },
    { id: 19, name: 'Greg Onyon',         date: 1517071308, status: true,  photo: '' },
    { id: 20, name: 'Barry Carbett',      date: 1515450742, status: true,  photo: '' },
    { id: 21, name: 'Carlyle Adran',      date: 1512498261, status: true,  photo: '' },
    { id: 22, name: 'Guillaume Petel',    date: 1512742913, status: false, photo: '' },
    { id: 23, name: 'Wendeline Glasner',  date: 1513319267, status: false, photo: '' },
    { id: 24, name: 'Sylvia Petrollo',    date: 1516080489, status: false, photo: '' },
    { id: 25, name: 'Meade Quoit',        date: 1513972299, status: true,  photo: '' },
    { id: 26, name: 'Eugine Planke',      date: 1515488407, status: false, photo: '' },
    { id: 27, name: 'Thoma Drakeley',     date: 1515023660, status: false, photo: '' },
    { id: 28, name: 'Web Margetson',      date: 1513557231, status: true,  photo: '' },
    { id: 29, name: 'Erskine Stivens',    date: 1515233788, status: true,  photo: '' },
    { id: 30, name: 'Jedidiah Emmer',     date: 1512614842, status: false, photo: '' },
    { id: 31, name: 'Wolfie Drakers',     date: 1512381522, status: false, photo: '' },
    { id: 32, name: 'Allie Quiney',       date: 1515488202, status: true,  photo: '' }
  ]

  public columns = [
    {
      prop: 'check',
      cellClass: 'text-center align-middle'
    },
    {
      prop: 'photo',
      label: 'Photo',
      headerClass: 'text-center',
      cellClass: 'align-middle text-center'
    },
    {
      prop: 'name',
      label: 'Name',
      headerClass: 'max-width',
      cellClass: 'align-middle text-nowrap'
    },
    {
      prop: 'date',
      label: 'Date',
      cellClass: 'align-middle text-nowrap',
      sortable: true
    },
    {
      prop: 'status',
      label: ' ',
      cellClass: 'text-center align-middle'
    },
    {
      prop: 'action',
      label: 'Action',
      cellClass: 'text-center align-middle'
    }
  ]

}
