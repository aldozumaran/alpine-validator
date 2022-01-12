
# Alpine Validator

Add Validator to your Alpine 3.x components with a custom directive.

> This package only supports Alpine v3.x.

## About

This plugin adds a new `x-validator` to Alpine.

## Installation

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

To create a validator, use the `x-validator` directive on an element.

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