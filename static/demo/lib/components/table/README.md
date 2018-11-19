# Table

The styled version of the Bootstrap [tables](https://getbootstrap.com/docs/4.1/content/tables/).

<!-- STORY -->

### Usage

```html
<div class="e-panel card">
  <div class="card-body">
    <div class="card-title">
      <h6 class="mr-2">
        <span>New Users</span><small class="px-1">For the week</small>
      </h6>
      <small class="text-muted">1 - 3 of 32</small>
    </div>
    <div class="mt-3">
      <div class="e-table">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="text-center">#</th>
                <th class="max-width sortable">Name</th>
                <th class="sortable sortable--desc">Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><b>1</b></td>
                <td class="text-nowrap">Adam Cotter</td>
                <td class="text-nowrap"><span>09 Dec 2017</span></td>
                <td class="text-center"><span class="badge badge-light">true</span></td>
              </tr>
              <tr>
                <td class="text-center"><b>2</b></td>
                <td class="text-nowrap">Pauline Noble</td>
                <td class="text-nowrap"><span>26 Jan 2018</span></td>
                <td class="text-center"><span class="badge badge-secondary">false</span></td>
              </tr>
              <tr>
                <td class="text-center"><b>3</b></td>
                <td class="text-nowrap">Sherilyn Metzel</td>
                <td class="text-nowrap"><span>27 Jan 2018</span></td>
                <td class="text-center"><span class="badge badge-light">true</span></td>
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
```

### See Also
- [Bootstrap - Tables](https://getbootstrap.com/docs/4.1/content/tables/)
- [Bootstrap - Pagination](https://getbootstrap.com/docs/4.1/components/pagination/)
