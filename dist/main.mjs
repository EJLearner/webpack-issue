/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/exportFile.js
const aValue = 100;

/* harmony default export */ const exportFile = ({
  value: aValue,
});



;// CONCATENATED MODULE: ./src/index.js


/* harmony default export */ function src() {
  // destructuring from import file results in undefined variable
  // note that the compiled code references a key that doesn't exist
  const {/* value */ "U": destructuredDefaultProperty} = exportFile;

  // non destructured syntax works fine
  const defaultProperty = exportFile.value;

  // all values are defined except from the destructured default import
  return `${aValue} ${defaultProperty} ${destructuredDefaultProperty}`;
}

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
