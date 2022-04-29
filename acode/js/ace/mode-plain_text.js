"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("ace/mode/plain_text", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text", "ace/mode/text_highlight_rules", "ace/mode/behaviour"], function (require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");

  var TextMode = require("./text").Mode;

  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var Behaviour = require("./behaviour").Behaviour;

  var Mode = function Mode() {
    this.HighlightRules = TextHighlightRules;
    this.$behaviour = new Behaviour();
  };

  oop.inherits(Mode, TextMode);
  (function () {
    this.type = "text";

    this.getNextLineIndent = function (state, line, tab) {
      return '';
    };

    this.$id = "ace/mode/plain_text";
  }).call(Mode.prototype);
  exports.Mode = Mode;
});

(function () {
  window.require(["ace/mode/plain_text"], function (m) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
      module.exports = m;
    }
  });
})();