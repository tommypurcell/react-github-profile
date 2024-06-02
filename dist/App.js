"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _GithubProfile = _interopRequireDefault(require("./GithubProfile"));
require("./output.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_GithubProfile.default, {
    userName: 'ynotrusso',
  }));
}
var _default = exports.default = App;