# atomic-design-vue-less

A Less design system inspired by Tailwind, integrated into the Vue starter app.

## Design Tokens

We can define design tokens, such as colors:

``` less
@color-black: #22292f;
@color-grey-darkest: #3d4852;
@color-grey-darker: #606f7b;
@color-grey-dark: #8795a1;
@color-grey: #b8c2cc;
@color-grey-light: #dae1e7;
@color-grey-lighter: #f1f5f8;
@color-grey-lightest: #f8fafc;
@color-white: #ffffff;
```

text sizes:

``` less
@text-xs: 0.75rem;     // 12px
@text-sm: 0.875rem;    // 14px
@text-md: 1rem;        // 16px
@text-lg: 1.125rem;    // 18px
@text-xl: 1.25rem;     // 20px
@text-xxl: 1.5rem;     // 24px
@text-xxxl: 1.875rem;  // 30px
@text-xxxxl: 2.25rem;  // 36px
@text-xxxxxl: 3rem;    // 48px
```

and spacing:

``` less
@spacing-none: 0;
@spacing-1: 0.25rem;
@spacing-2: 0.5rem;
@spacing-3: 0.75rem;
@spacing-4: 1rem;
@spacing-5: 1.25rem;
@spacing-6: 1.5rem;
@spacing-8: 2rem;
@spacing-10: 2.5rem;
@spacing-12: 3rem;
@spacing-16: 4rem;
@spacing-24: 6rem;
```

and then reference them in other Less files:

``` less
.my-component {
  color: @color-grey;
  font-size: @text-xl;
  padding: @spacing-4;
}
```

## Functions/Mixins

We can also define useful functions/mixins:

``` less

.shadow(@distance: 2px, @base-color: black, @opacity: 0.10) {
  box-shadow: 0 @distance (2 * @distance) 0 fade(@base-color, percentage(@opacity));
}

.inset-shadow(@distance: 2px, @base-color: black, @opacity: 0.10) {
  box-shadow: inset 0 @distance (2 * @distance) 0 fade(@base-color, percentage(@opacity));
}
```

Less also makes it easy to create useful shorthand utilities for common
needs:

``` less
.layer() {
  position: absolute;
}

.pin-all(@distance: 0) {
  top: @distance;
  right: @distance;
  bottom: @distance;
  left: @distance;
}

.unpin-all() {
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
}

.pin-y(@distance: 0) {
  top: @distance;
  bottom: @distance;
}

.unpin-y() {
  top: auto;
  bottom: auto;
}

.pin-x(@distance: 0) {
  right: @distance;
  left: @distance;
}

.unpin-x() {
  right: auto;
  left: auto;
}

.pin-top(@distance: 0) {
  top: @distance;
}

.unpin-top() {
  top: auto;
}

.pin-right(@distance: 0) {
  right: @distance;
}

.unpin-right() {
  right: auto;
}

.pin-bottom(@distance: 0) {
  bottom: @distance;
}

.unpin-bottom() {
  bottom: auto;
}

.pin-left(@distance: 0) {
  left: @distance;
}

.unpin-left() {
  left: auto;
}
```

and use them:

``` less
.pane {
  .layer();
  .pin-all();
}

.pane-left {
  .pane;
  .unpin-right();
}
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
