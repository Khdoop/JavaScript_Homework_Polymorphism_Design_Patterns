function AbstractNotepad(arrayPages) {

    var _pages = arrayPages;

    this.getPages = function() {
        return _pages;
    }
}

AbstractNotepad.prototype.addContent = function() {
    throw new Error('implement this yourself');
};

AbstractNotepad.prototype.newContent = function() {
    throw new Error('implement this yourself');
};

AbstractNotepad.prototype.removeContent = function() {
    throw new Error('implement this yourself');
};

AbstractNotepad.prototype.previewPages = function() {
    throw new Error('implement this yourself');
};

AbstractNotepad.prototype.searchWord = function() {
    throw new Error('implement this yourself');
};

AbstractNotepad.prototype.printAllPagesWithDigits = function() {
    throw new Error('implement this yourself');
};