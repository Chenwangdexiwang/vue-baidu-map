# VUE BAIDU MAP

<p align="center">
  <img src="https://dafrok.github.io/vue-baidu-map/favicon.png" width="200px">
</p>
<p align="center">Baidu Map components for Vue 2.x</p>

[![npm](https://img.shields.io/npm/v/vue-baidu-map.svg)]()
[![Travis](https://img.shields.io/travis/Dafrok/vue-baidu-map.svg)]()
[![Package Quality](http://npm.packagequality.com/shield/vue-baidu-map.svg)](http://packagequality.com/#?package=vue-baidu-map)
[![npm](https://img.shields.io/npm/dm/vue-baidu-map.svg)]()
[![license](https://img.shields.io/github/license/dafrok/vue-baidu-map.svg)]()

## What did I do?

修复在`html`文件时并通过`script`引用时，`Geolocation`组件无法触发事件的问题，已知`locationSuccess`事件由于大小写的问题无法触发，其他事件未经过测试（脚手架通过npm安装的应该无此问题）！


```javascript
/** bindEvent.js **/

// old code
const listener = this.$listeners[eventName]

// new code
let listener = this.$listeners[eventName]
if (!listener) {
  listener = this.$listeners[eventName.toLowerCase()]
}

```

## Languages

- [中文](https://github.com/Dafrok/vue-baidu-map/blob/master/README.zh.md)
- [English](https://github.com/Dafrok/vue-baidu-map/blob/master/README.md)

## Documentation

[https://dafrok.github.io/vue-baidu-map](https://dafrok.github.io/vue-baidu-map)

## Get Start

### Installation

```bash
npm i --save vue-baidu-map
```

### Initialization

```javascript
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
```

### Usage

```vue
<template>
  <baidu-map class="map">
  </baidu-map>
</template>

<style>
/* The container of BaiduMap must be set width & height. */
.map {
  width: 100%;
  height: 300px;
}
</style>
```

## Contributing

[Contributing Guide](https://github.com/Dafrok/vue-baidu-map/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2016-present, Dafrok <o.o@mug.dog>