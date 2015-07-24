System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "app-bundle": [
      "npm:process@0.10.1/browser",
      "github:aurelia/history@0.6.0/index",
      "npm:process@0.10.1",
      "github:aurelia/history@0.6.0",
      "github:jspm/nodelibs-process@0.1.1/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.18/client/shim.min",
      "npm:core-js@0.9.18",
      "github:aurelia/history-browser@0.6.1/index",
      "github:aurelia/history-browser@0.6.1",
      "github:aurelia/path@0.8.0/index",
      "github:aurelia/path@0.8.0",
      "github:aurelia/loader@0.8.2/index",
      "github:aurelia/loader@0.8.2",
      "github:aurelia/metadata@0.7.0/index",
      "github:aurelia/metadata@0.7.0",
      "github:aurelia/loader-default@0.9.0/index",
      "github:aurelia/loader-default@0.9.0",
      "github:aurelia/logging@0.6.1/index",
      "github:aurelia/route-recognizer@0.6.0/index",
      "github:aurelia/event-aggregator@0.6.1/index",
      "github:aurelia/task-queue@0.6.0/index",
      "github:aurelia/templating-router@0.14.0/router-view",
      "github:aurelia/templating-router@0.14.0/route-href",
      "github:aurelia/logging@0.6.1",
      "github:aurelia/route-recognizer@0.6.0",
      "github:aurelia/event-aggregator@0.6.1",
      "github:aurelia/task-queue@0.6.0",
      "github:aurelia/dependency-injection@0.9.0/index",
      "github:aurelia/binding@0.8.2/index",
      "github:aurelia/dependency-injection@0.9.0",
      "github:aurelia/binding@0.8.2",
      "github:aurelia/templating@0.13.11/index",
      "github:aurelia/templating@0.13.11",
      "github:aurelia/router@0.10.2/index",
      "github:aurelia/templating-router@0.14.0/route-loader",
      "github:aurelia/router@0.10.2",
      "github:aurelia/templating-router@0.14.0/index",
      "github:aurelia/templating-router@0.14.0",
      "github:aurelia/templating-resources@0.13.1/if",
      "github:aurelia/templating-resources@0.13.1/with",
      "github:aurelia/templating-resources@0.13.1/repeat",
      "github:aurelia/templating-resources@0.13.1/show",
      "github:aurelia/templating-resources@0.13.1/global-behavior",
      "github:aurelia/templating-resources@0.13.1/sanitize-html",
      "github:aurelia/templating-resources@0.13.1/replaceable",
      "github:aurelia/templating-resources@0.13.1/focus",
      "github:aurelia/templating-resources@0.13.1/compose",
      "github:aurelia/templating-resources@0.13.1/index",
      "github:aurelia/templating-resources@0.13.1",
      "github:aurelia/templating-binding@0.13.1/index",
      "github:aurelia/templating-binding@0.13.1",
      "github:aurelia/animator-css@0.13.0/index",
      "github:aurelia/animator-css@0.13.0",
      "github:aurelia/http-client@0.10.0/index",
      "github:aurelia/http-client@0.10.0",
      "github:aurelia/logging-console@0.6.0/index",
      "github:aurelia/logging-console@0.6.0",
      "github:aurelia/framework@0.13.3/index",
      "github:aurelia/framework@0.13.3",
      "github:aurelia/bootstrapper@0.14.0/index",
      "github:aurelia/bootstrapper@0.14.0",
      "welcome",
      "nav-bar",
      "flickr",
      "child-router",
      "github:components/jquery@2.1.4/jquery",
      "github:systemjs/plugin-css@0.1.13/css",
      "github:components/jquery@2.1.4",
      "github:systemjs/plugin-css@0.1.13",
      "github:twbs/bootstrap@3.3.5/js/bootstrap",
      "github:twbs/bootstrap@3.3.5",
      "app",
      "animation-main"
    ]
  },
  "buildCSS": false
});

System.config({
  "map": {
    "aurelia-animator-css": "github:aurelia/animator-css@0.13.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
    "aurelia-framework": "github:aurelia/framework@0.13.3",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "aurelia-router": "github:aurelia/router@0.10.2",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "font-awesome": "npm:font-awesome@4.3.0",
    "github:aurelia/animator-css@0.13.0": {
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/binding@0.8.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-framework": "github:aurelia/framework@0.13.3",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.1",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.1"
    },
    "github:aurelia/framework@0.13.3": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.1": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.2": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating-resources@0.13.1": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.11",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.2",
      "aurelia-templating": "github:aurelia/templating@0.13.11"
    },
    "github:aurelia/templating@0.13.11": {
      "aurelia-binding": "github:aurelia/binding@0.8.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.2",
      "aurelia-logging": "github:aurelia/logging@0.6.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    }
  }
});
