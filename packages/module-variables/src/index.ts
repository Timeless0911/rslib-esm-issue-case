declare const __webpack_nonce__: string | undefined;

const styleElement = document.createElement("style");
if (typeof __webpack_nonce__ !== "undefined") {
  styleElement.nonce = __webpack_nonce__;
}
styleElement.appendChild(document.createTextNode("/* jsxstyle */"));
document.head.appendChild(styleElement);
