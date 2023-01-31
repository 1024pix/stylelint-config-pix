# Pix Stylelint shared config

## Why?

To improve our SCSS quality, we use the [Stylelint](https://stylelint.io/) library in various projects.

To ensure homogenity between all files, we share a few Stylelint configs in this repository.

## Setup

Install the required dependencies:

```
$ npm install --save-dev stylelint stylelint-config-standard-scss stylelint-config-prettier @1024pix/stylelint-config
```

Copy paste the following code to your .stylelintrc.json file content in your project:

```
{
    extends: ["@1024pix/stylelint-config"]
}
```

We recommend defining a npm script:

```
    "scripts": {
        ...
        "lint:scss": "stylelint app/styles/*.scss 'app/styles/**/*.scss'"
    }
```

If the rules provided here are not enough, it's possible to add your own rules in the .stylelintrc.json file. See [mon-pix conf](https://github.com/1024pix/pix/blob/dev/mon-pix/.stylelintrc.json) for example.
