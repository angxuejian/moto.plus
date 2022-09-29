"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _highlight = _interopRequireDefault(require("highlight.js"));

require("highlight.js/styles/atom-one-dark.css");

require("highlight.js/styles/atom-one-light.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_highlight["default"].configure({
  ignoreUnescapedHTML: true // 关闭 html未转义的警告 https://github.com/highlightjs/highlight.js/wiki/security

});

var setHighlight = function setHighlight(el) {
  var blocks = el.querySelectorAll('pre code');
  blocks.forEach(function (block) {
    _highlight["default"].highlightBlock(block);
  });
};

var _default = {
  mounted: function mounted(el) {
    setHighlight(el);
  },
  updated: function updated(el) {
    setHighlight(el);
  }
};
exports["default"] = _default;