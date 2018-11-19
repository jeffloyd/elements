# Datepicker `Range`

Date and time picker based on [flatpickr](https://github.com/chmln/flatpickr) component.

<!-- STORY -->

### Usage
```html
<!-- include Flatpickr library -->
<script src="vendor/flatpickr/flatpickr.min.js"></script>

<input id="flatpickr-range" class="form-control" placeholder="Range" type="text">
```
```js
$("#flatpickr-range").flatpickr({
  mode: 'range',
  dateFormat: 'd M y',
  locale: Object.assign({}, flatpickr.l10ns.default, {
    weekdays: {
      shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
    rangeSeparator: " - "
  }),
  disableMobile: true
})
```

### Dependencies

| Name        | Install    |
|-------------|---------|
| [flatpickr](https://github.com/chmln/flatpickr) | `npm install flatpickr --save` |

### See Also
- [flatpickr](https://github.com/chmln/flatpickr)
