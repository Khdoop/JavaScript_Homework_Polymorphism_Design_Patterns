function SimpleNotepad(arrayPages) {
    AbstractNotepad.call(this, arrayPages);
}

SimpleNotepad.prototype = Object.create(AbstractNotepad.prototype);
SimpleNotepad.prototype.constructor = SimpleNotepad;

SimpleNotepad.prototype.addContent = function(index, content) {
    var page = this.getPages()[index];
    page.setContent(page.getContent() + content);
};

SimpleNotepad.prototype.newContent = function(index, content) {
    this.getPages()[index].setContent(content);
};

SimpleNotepad.prototype.removeContent = function(index) {
    this.getPages()[index].setContent('');
};

SimpleNotepad.prototype.previewPages = function() {
    var pages = this.getPages();

    for (var i in pages) {
        console.log(pages[i].getTitle() + "\n" + pages[i].getContent());
    }
};