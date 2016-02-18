function SecuredNotepad(password, arrayPages) {

    if (password.length < 5 || !(password.match(/[a-z]/)) || !(password.match(/[A-Z]/)) || !(password.match(/\d/))) {
        throw new Error('password not good enough');
    }

    AbstractNotepad.call(this, arrayPages);

    var _password = password;

    this.getPassword = function() {
        return _password;
    };
}

SecuredNotepad.prototype = Object.create(AbstractNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;

SecuredNotepad.prototype.addContent = function(password, index, content) {
    if (password !== this.getPassword()) return 'wrong password';

    var page = this.getPages()[index];
    page.setContent(page.getContent() + content);
};

SecuredNotepad.prototype.newContent = function(password, index, content) {
    if (password !== this.getPassword()) return 'wrong password';

    this.getPages()[index].setContent(content);
};

SecuredNotepad.prototype.removeContent = function(password, index) {
    if (password !== this.getPassword()) return 'wrong password';

    this.getPages()[index].setContent('');
};

SecuredNotepad.prototype.previewPages = function(password) {
    if (password !== this.getPassword()) return 'wrong password';

    var pages = this.getPages();

    for (var i in pages) {
        console.log(pages[i].getTitle() + "\n" + pages[i].getContent());
    }
};