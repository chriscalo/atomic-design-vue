# atomic-stylus-vue

A Stylus design system inspired by Tailwind, integrated into the Vue starter
app.

## Design Tokens

We can define design tokens, such as colors:

``` stylus
$color-black = #22292f;
$color-grey-darkest = #3d4852;
$color-grey-darker = #606f7b;
$color-grey-dark = #8795a1;
$color-grey = #b8c2cc;
$color-grey-light = #dae1e7;
$color-grey-lighter = #f1f5f8;
$color-grey-lightest = #f8fafc;
$color-white = #ffffff;
```

text sizes:

``` stylus
$text-xs = 0.75rem;     // 12px
$text-sm = 0.875rem;    // 14px
$text-md = 1rem;        // 16px
$text-lg = 1.125rem;    // 18px
$text-xl = 1.25rem;     // 20px
$text-xxl = 1.5rem;     // 24px
$text-xxxl = 1.875rem;  // 30px
$text-xxxxl = 2.25rem;  // 36px
$text-xxxxxl = 3rem;    // 48px
```

and spacing:

``` stylus
$spacing-none = 0;
$spacing-1 = 0.25rem;
$spacing-2 = 0.5rem;
$spacing-3 = 0.75rem;
$spacing-4 = 1rem;
$spacing-5 = 1.25rem;
$spacing-6 = 1.5rem;
$spacing-8 = 2rem;
$spacing-10 = 2.5rem;
$spacing-12 = 3rem;
$spacing-16 = 4rem;
$spacing-24 = 6rem;
```

and then reference them in other Stylus files:

``` stylus
.my-component {
  color: $color-grey;
  font-size: $text-xl;
  padding: $spacing-4;
}
```

## Functions/Mixins

We can also define useful functions/mixins:

``` stylus

shadow($distance = 2px, $base-color = black, $opacity = 0.10) {
  $x = 0;
  $y = $distance;
  $blur = (2 * $distance);
  $spread = 0;
  $color = rgba($base-color, $opacity);
  return $x $y $blur $spread $color;
}

inset-shadow($distance = 2px, $base-color = black, $opacity = 0.10) {
  return inset shadow($distance, $base-color, $opacity);
}

$shadow-sm = shadow();
$shadow-md = shadow(4px, black, 0.12), shadow(2px, black, 0.08);
$shadow-lg = shadow(15px, black, 0.11), shadow(5px, black, 0.08);
$shadow-inner = inset-shadow(2px, black, 0.06);
$shadow-outline = 0 0 0 3px rgba(52,144,220,0.5);
$shadow-none = none;
$shadow-default = $shadow-sm;
```

Stylus also makes it easy to create useful shorthand utilities for common
needs:

``` stylus
layer() {
  position: absolute;
}

pin-all(distance = 0) {
  top: distance;
  right: distance;
  bottom: distance;
  left: distance;
}

unpin-all() {
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
}

pin-y(distance = 0) {
  top: distance;
  bottom: distance;
}

unpin-y() {
  top: auto;
  bottom: auto;
}

pin-x(distance = 0) {
  right: distance;
  left: distance;
}

unpin-x() {
  right: auto;
  left: auto;
}

pin-top(distance = 0) {
  top: distance;
}

unpin-top() {
  top: auto;
}

pin-right(distance = 0) {
  right: distance;
}

unpin-right() {
  right: auto;
}

pin-bottom(distance = 0) {
  bottom: distance;
}

unpin-bottom() {
  bottom: auto;
}

pin-left(distance = 0) {
  left: distance;
}

unpin-left() {
  left: auto;
}
```

and use them:

``` stylus
.pane {
  layer();
  pin-all();
}

.pane-left {
  @extends .pane;
  unpin-right();
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
