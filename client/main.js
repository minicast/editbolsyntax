
Template.body.onRendered(function mountEditors(){
// Tracker.autorun(function(){});

  // var editor = ace.edit('domElementId');
  var keyboardEditor = ace.edit('keyboard-editor');
  let kes = keyboardEditor.getSession();
  kes.setMode('ace/mode/livescript');
  keyboardEditor.setTheme('ace/theme/solarized_light');
  kes.setTabSize(2);
  kes.setUseSoftTabs(true);
  keyboardEditor.setShowPrintMargin(true);
  keyboardEditor.$blockScrolling = Infinity;
  keyboardEditor.insert(
`(
  (p & q & r) |
  (
    (p > q) ^ (p & ~ r)
  )
)`);
  keyboardEditor.getSession().on('change', function(e) {
    // console.log(e);
    // e.type, etc
    var keyCode = keyboardEditor.getValue();
    latexEditor.setValue('');
    latexEditor.insert(keyCode);
  });

  var latexEditor = ace.edit('latex-editor');
  latexEditor.getSession().setMode('ace/mode/latex');
  latexEditor.setTheme('ace/theme/katzenmilch');
  latexEditor.$blockScrolling = Infinity;
  latexEditor.insert(
`(
  (p \\land q)
  \\to
  (p \\lor q)
)`);

  var jsonEditor = ace.edit('json-editor');
  jsonEditor.getSession().setMode('ace/mode/json');
  jsonEditor.setTheme('ace/theme/tomorrow');
  jsonEditor.$blockScrolling = Infinity;
  jsonEditor.insert(
`{
  "junctor": "&",
  "left": "p",
  "right": "q"
}`);

});
