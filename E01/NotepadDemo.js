var arrayPages = [
    new Page('Title 01', 'First page text.'),
    new Page('Title 02', 'Second page text.'),
    new Page('Title 03', 'Third page text.'),
    new Page('Title 04', 'Fourth page text.')
];

var simpleNotepad = new SimpleNotepad(arrayPages);
var securedNotepad = new SecuredNotepad('admin', arrayPages);

simpleNotepad.addContent(1, 'Added text.');
simpleNotepad.newContent(3, 'New text.');
simpleNotepad.removeContent(2);
simpleNotepad.previewPages();

console.log("\n");

securedNotepad.addContent('admin', 1, 'Added text.');
securedNotepad.newContent('admin', 3, 'New text.');
securedNotepad.removeContent('admin', 0);
securedNotepad.previewPages('admin');