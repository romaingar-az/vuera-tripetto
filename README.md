# vue-cli-demo

## Install vue-cli

    $ yarn global add @vue/cli

## Init project with cli

    $ vue create hello-vue

Then follow cli to config your project. 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Install vuera

    $ yarn add vuera
    $ yarn add react
    $ yarn add react-dom

##　Use vuera

You can follow [this document](https://github.com/akxcv/vuera/blob/master/README.md). Just use vuera plugin like that.

```
import { VuePlugin } from 'vuera'

Vue.use(VuePlugin)
```

## Install antd for React

    $ yarn add antd
    $ yarn add babel-plugin-import

Add that in `babel.config.js`
```
plugins: [
    ["import", { "libraryName": "antd", "style": "css" }]
]
```

## Compiles and hot-reloads for development
    $ yarn run serve
