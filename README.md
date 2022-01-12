> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine Tooltip

Add tooltips to your Alpine 3.x components with a custom directive.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-tooltip?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/alpine-tooltip/main/dist/cdn.min.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/alpine-tooltip/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/alpine-tooltip)

> This package only supports Alpine v3.x.

## About

This plugin adds a new `x-tooltip` to Alpine, alongside a bunch of modifiers for changing your tooltip's behaviour.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script
    src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-tooltip@0.x.x/dist/cdn.min.js"
    defer
></script>
```

### NPM

```bash
npm install alpine-validator
```

Add the `x-validator` directive to your project by registering the plugin with Alpine.

```js
import Alpine from "alpinejs";
import Validator from "alpine-validator";

Alpine.plugin(Validator);

window.Alpine = Alpine;
window.Alpine.start();
```

## Usage

To create a tooltip, use the `x-validator` directive on an element.

```html
<div x-validator>
    <input data-validator data-filter="numeric" />
</div>
```

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines.

## License

Copyright (c) 2021 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.