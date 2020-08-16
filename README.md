# vue_demo_project

## 測試 style、語法、套件

## 使用的套件

### vue-loading-overlay

- [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)

### vue-axios,axios

- [vue-axios](https://www.npmjs.com/package/vue-axios)

## 開發環境設定

### .editorconfig

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100

```

### .prettierrc

```
{
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}

```

### eslint → package.json → rules

```
"rules": {
      "no-console": "off"
    }
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
