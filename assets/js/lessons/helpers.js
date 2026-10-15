// Small helpers that make lesson files short to write.
//   P(text)      paragraph
//   U(...items)  bullet list
//   C(code)      code sample
//   T(text)      tip box
//   L(title, ...blocks)  one lesson
window.LESSONS = window.LESSONS || {};
window.LH = {
  P: function (text) { return { type: "p", text: text }; },
  U: function () { return { type: "ul", items: Array.prototype.slice.call(arguments) }; },
  C: function (code) { return { type: "code", code: code }; },
  T: function (text) { return { type: "tip", text: text }; },
  L: function (title) {
    return { title: title, blocks: Array.prototype.slice.call(arguments, 1) };
  }
};
