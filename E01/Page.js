function Page(title, content) {

    var _title = title;

    var _content = content;

    this.getTitle = function() {
        return _title;
    };

    this.getContent = function() {
        return _content;
    };

    this.setContent = function(string) {
        _content = string;
    };
}

Page.prototype.preview = function() {
    /*console.log(this.getTitle());
    console.log(this.getContent());*/
    return this.getTitle() + "\n" + this.getContent();
};