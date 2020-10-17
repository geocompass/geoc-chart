<h1 align="center">Gde</h1>

<div align="center>

自定义封装Geoc、G2、G2Plot、L7、Mapbox等自定义图表配置

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)

</div>

<div align="center">
  <img src="https://github.com/geocompass/geoc-chart/blob/main/doc/assets/demo-chart.png" width="800">
</div>


## 安装

### npm

```bash
$ yarn add gde
```

### clone

```bash
$ git clone https://github.com/geocompass/geoc-chart.git

$ cd geoc-chart/

$ npm run build

$ lib/gde.min.js
```


## 使用
<div align="center">
    <img src="https://github.com/geocompass/geoc-chart/blob/main/doc/assets/demo-use.png" width="450" />
</div>

<br/>

```html
<div id="gde-geoc_text"></div>

<div id="gde-geoc_multilinetext"></div>

<div id="gde-g2plot_pie"></div>

<div id="gde-mapbox"></div>
```

```js
import Gde from 'gde';

Gde.accessToken = '';
new Gde('gde-geoc_text', '4c2d467e-fc82-4ca1-bc73-fec59242c330');
new Gde('gde-geoc_multilinetext', 'b8adc5bf-d86b-4810-86b3-f0792c369bea');
new Gde('gde-g2plot_pie', 'c0190da6-e803-48a8-9266-32f7e44a5690');
new Gde('gde-mapbox', '65eec7ab-64e7-4922-97cb-c9962233b967');
```


## 测试

### `geoc-chart`包中

```bash
$ npm run build

$ npm link
```

### 使用该包的项目中

```bash
$ npm link gde
```


## 数据文档

<details>
  <summary><b>G2Plot 使用文档</b></summary>

  [G2Plot](https://g2plot.antv.vision/zh/docs/manual/introduction)
</details>

<details>
  <summary><b>Mapbox 使用文档</b></summary>

  [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/)
</details>

<details>
  <summary><b>Geoc 使用文档</b></summary>

  [Geoc](https://github.com/geocompass/geoc-chart/blob/main/doc/GEOC.md)
</details>


## 许可证

MIT
