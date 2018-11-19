# Table `Advanced`

The styled version of the Bootstrap [tables](https://getbootstrap.com/docs/4.1/content/tables/).

<!-- STORY -->

### Usage

```html
<style>
  .e-advanced-table .bookmark {
    cursor: pointer;
    color: #e9ecef;
  }

  .e-advanced-table .bookmark:hover,
  .e-advanced-table .bookmark.active {
    color: #adb5bd;
  }
</style>
<div class="card">
  <div class="card-body">
    <div class="e-advanced-table">
      <div class="d-flex mb-3">
        <div class="mr-3" style="flex-grow: 1">
          <form class="form-inline">
            <div class="input-with-ico w-100">
              <i class="input-ico fa fa-fw fa-search"></i>
              <div class="input-group flex-nowrap w-100">
                <input class="form-control w-100" type="search" placeholder="Search" value="">
              </div>
            </div>
          </form>
        </div>
        <div>
          <div class="btn-group">
            <button class="btn btn-success">
              <i class="fa fa-plus"></i>
              <span class="d-none d-md-inline-block ml-1">Create</span>
            </button>
            <button type="button" class="dropdown-toggle btn btn-success" data-toggle="dropdown"></button>
            <div class="dropdown-menu dropdown-menu-right">
              <h6 class="dropdown-header">With selected:</h6>
              <button type="button" class="dropdown-item">Remove</button>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">Toggle:</h6>
              <button type="button" class="dropdown-item">Status</button>
              <button type="button" class="dropdown-item">Bookmark</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row flex-lg-nowrap">
        <div class="col">
          <div class="e-navlist e-navlist--active-bold">
            <ul class="nav">
              <li class="nav-item active"><a href="" class="nav-link"><span>All</span>&nbsp;<small>/&nbsp;32</small></a></li>
              <li class="nav-item"><a href="" class="nav-link"><span>Bookmarks</span>&nbsp;<small>/&nbsp;16</small></a></li>
              <li class="nav-item"><a href="" class="nav-link"><span>Selected</span>&nbsp;<small>/&nbsp;2</small></a></li>
            </ul>
          </div>
          <hr class="mb-3">
          <div class="px-2">
            <div class="custom-control custom-checkbox m-0">
              <input type="checkbox" class="custom-control-input" id="at-actives-check">
              <label class="custom-control-label" for="at-actives-check">Actives Only</label>
            </div>
          </div>
          <hr class="my-3 d-md-none">
        </div>
        <div class="col-12 col-md-9">
          <div class="e-table">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="align-top">
                      <div class="custom-control custom-control-inline custom-control-nameless custom-checkbox m-0">
                        <input type="checkbox" class="custom-control-input" id="at-all-items">
                        <label class="custom-control-label" for="at-all-items"></label>
                      </div>
                    </th>
                    <th class="max-width">Name</th>
                    <th class="sortable sortable--desc">Date</th>
                    <th>Status</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="at-item-1">
                        <label class="custom-control-label" for="at-item-1"></label>
                      </div>
                    </td>
                    <td class="text-nowrap">Adam Cotter</td>
                    <td class="text-nowrap"><span>09 Dec 2017</span></td>
                    <td class="text-center"><span class="badge badge-light">true</span></td>
                    <td class="text-center"><span class="bookmark"><i class="fa fa-bookmark fa-fw"></i></span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="at-item-2" checked="">
                        <label class="custom-control-label" for="at-item-2"></label>
                      </div>
                    </td>
                    <td class="text-nowrap">Pauline Noble</td>
                    <td class="text-nowrap"><span>26 Jan 2018</span></td>
                    <td class="text-center"><span class="badge badge-secondary">false</span></td>
                    <td class="text-center"><span class="bookmark active"><i class="fa fa-bookmark fa-fw"></i></span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="at-item-3" checked="">
                        <label class="custom-control-label" for="at-item-3"></label>
                      </div>
                    </td>
                    <td class="text-nowrap">Sherilyn Metzel</td>
                    <td class="text-nowrap"><span>27 Jan 2018</span></td>
                    <td class="text-center"><span class="badge badge-light">true</span></td>
                    <td class="text-center"><span class="bookmark"><i class="fa fa-bookmark fa-fw"></i></span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="at-item-4">
                        <label class="custom-control-label" for="at-item-4"></label>
                      </div>
                    </td>
                    <td class="text-nowrap">Terrie Boaler</td>
                    <td class="text-nowrap"><span>20 Jan 2018</span></td>
                    <td class="text-center"><span class="badge badge-light">true</span></td>
                    <td class="text-center"><span class="bookmark"><i class="fa fa-bookmark fa-fw"></i></span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                        <input type="checkbox" class="custom-control-input" id="at-item-5">
                        <label class="custom-control-label" for="at-item-5"></label>
                      </div>
                    </td>
                    <td class="text-nowrap">Rutter Pude</td>
                    <td class="text-nowrap"><span>13 Jan 2018</span></td>
                    <td class="text-center"><span class="badge badge-secondary">false</span></td>
                    <td class="text-center"><span class="bookmark active"><i class="fa fa-bookmark fa-fw"></i></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center">
              <ul class="pagination mt-3 mb-0">
                <li class="disabled page-item"><a href="#" class="page-link">‹</a></li>
                <li class="active page-item"><a href="#" class="page-link">1</a></li>
                <li class="page-item"><a href="#" class="page-link">2</a></li>
                <li class="page-item"><a href="#" class="page-link">3</a></li>
                <li class="page-item"><a href="#" class="page-link">4</a></li>
                <li class="page-item"><a href="#" class="page-link">5</a></li>
                <li class="page-item"><a href="#" class="page-link">›</a></li>
                <li class="page-item"><a href="#" class="page-link">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### See Also
- [Bootstrap - Tables](https://getbootstrap.com/docs/4.1/content/tables/)
- [Bootstrap - Pagination](https://getbootstrap.com/docs/4.1/components/pagination/)
