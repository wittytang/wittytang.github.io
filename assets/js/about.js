let fileData = readFile("../../README.md");

// document.querySelector(".markdown-body").innerHTML = marked.parse(
//   "# Marked in the browser\n\nRendered by **marked**."
// );

document.querySelector(".markdown-body").innerHTML = marked.parse(fileData);



/**
 * @Date: 2023-03-11 23:00:30
 * @description: 
 * @param {*} fileName
 * @return {*}
 */
function readFile(fileName) {
  let xhr = new XMLHttpRequest();
  let okStatus = document.location.protocol === "file:" ? 0 : 200;
  debugger;
  xhr.open("GET", fileName, false);
  xhr.overrideMimeType("text/html;charset=utf-8"); //默认为utf-8
  xhr.send(null);
  return xhr.status === okStatus ? xhr.responseText : null;
}
