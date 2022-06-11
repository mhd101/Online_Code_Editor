// Customizing HTML Editor
const htmleditor = CodeMirror(document.querySelector('#html'), {
    lineNumbers: true,
    tabSize: 2,
    value: '<!--HTML--> \n<h1 id="heading">Hello World!</h1>',
    theme: 'material-darker',
    lineWrapping: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      },
    mode: 'xml'
});

// Customizing CSS Editor
const csseditor = CodeMirror(document.querySelector('#css'), {
    lineNumbers: true,
    tabSize: 2,
    value: '/*CSS*/ \nh1 {  \n background-color: gray; \n color: white; \n cursor: pointer; \n}',
    theme: 'material-darker',
    lineWrapping: true,
    autoCloseBrackets: true,
    extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      },
    mode: 'css'
});

// Customizing Javascript Editor
const jseditor = CodeMirror(document.querySelector('#javascript'), {
    lineNumbers: true,
    tabSize: 2,
    value: '//JAVASCRIPT \ndocument.getElementById("heading").addEventListener("click", \nfunction(){ \n \t alert("Hello World!");\n});',
    theme: 'material-darker',
    lineWrapping: true,
    autoCloseBrackets: true,
    extraKeys: {
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        },
        "Ctrl-Space": "autocomplete",
      },
    mode: 'javascript'
});


// Compiling The Code
document.querySelector("#btn").addEventListener("click", function () {
    let htmlcode = htmleditor.getValue();
    let csscode = "<style>" + csseditor.getValue() + "</style>";
    let jscode = "<scri" + "pt>" + jseditor.getValue() + "</scri" + "pt>";
    let previewWindow = document.querySelector(".preview-container #code").contentWindow.document;
    previewWindow.open();
    previewWindow.write(htmlcode + csscode + jscode);
    previewWindow.close();
});


// Download Html File
document.getElementById("html-btn").addEventListener("click", function(){
  var text = htmleditor.getValue();
  var htmlfile = "index.html";
  var blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
  });
  saveAs(blob, htmlfile);
}, false);

// Download Css File
document.getElementById("css-btn").addEventListener("click", function(){
  var text = csseditor.getValue();
  var cssfile = "style.css";
  var blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
  });
  saveAs(blob, cssfile);
}, false);


// Download JS File
document.getElementById("js-btn").addEventListener("click", function(){
  var text = jseditor.getValue();
  var jsfile = "script.js";
  var blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
  });
  saveAs(blob, jsfile);
}, false);
