"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("ace/snippets/diff", ["require", "exports", "module"], function (require, exports, module) {
  "use strict";

  exports.snippetText = "# DEP-3 (http://dep.debian.net/deps/dep3/) style patch header\n\
snippet header DEP-3 style header\n\
	Description: ${1}\n\
	Origin: ${2:vendor|upstream|other}, ${3:url of the original patch}\n\
	Bug: ${4:url in upstream bugtracker}\n\
	Forwarded: ${5:no|not-needed|url}\n\
	Author: ${6:`g:snips_author`}\n\
	Reviewed-by: ${7:name and email}\n\
	Last-Update: ${8:`strftime(\"%Y-%m-%d\")`}\n\
	Applied-Upstream: ${9:upstream version|url|commit}\n\
\n\
";
  exports.scope = "diff";
});

(function () {
  window.require(["ace/snippets/diff"], function (m) {
    if ((typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && module) {
      module.exports = m;
    }
  });
})();