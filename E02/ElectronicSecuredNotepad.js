function ElectronicSecuredNotepad(password, arrayPages) {
    AbstractElectronicDevice.call(this);
    SecuredNotepad.call(this, password, arrayPages);

    var _state = false;

    this.getState = function() {
        return _state;
    };

    this.setState = function(boolean) {
        _state = boolean;
    };
}

ElectronicSecuredNotepad.prototype = Object.create(AbstractElectronicDevice.prototype);
ElectronicSecuredNotepad.prototype = Object.create(SecuredNotepad.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;

ElectronicSecuredNotepad.prototype.start = function() {
    this.setState(true);
};

ElectronicSecuredNotepad.prototype.stop = function() {
    this.setState(false);
};

ElectronicSecuredNotepad.prototype.isStarted = function() {
    return this.getState();
};
SecuredNotepad.prototype.addContent = function(password, index, content) {
    if (this.getState() == false) return 'device is turned off';
    if (password !== this.getPassword()) return 'wrong password';

    var page = this.getPages()[index];
    page.setContent(page.getContent() + content);
};

SecuredNotepad.prototype.newContent = function(password, index, content) {
    if (this.getState() == false) return 'device is turned off';
    if (password !== this.getPassword()) return 'wrong password';

    this.getPages()[index].setContent(content);
};

SecuredNotepad.prototype.removeContent = function(password, index) {
    if (this.getState() == false) return 'device is turned off';
    if (password !== this.getPassword()) return 'wrong password';

    this.getPages()[index].setContent('');
};

SecuredNotepad.prototype.previewPages = function(password) {
    if (this.getState() == false) return 'device is turned off';
    if (password !== this.getPassword()) return 'wrong password';

    var pages = this.getPages();

    for (var i in pages) {
        console.log(pages[i].getTitle() + "\n" + pages[i].getContent());
    }
};
