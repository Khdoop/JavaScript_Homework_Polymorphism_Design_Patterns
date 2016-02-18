function AbstractElectronicDevice() {

}

AbstractElectronicDevice.prototype.start = function() {
    throw new Error('implement this yourself');
};

AbstractElectronicDevice.prototype.stop = function() {
    throw new Error('implement this yourself');
};
AbstractElectronicDevice.prototype.isStarted = function() {
    throw new Error('implement this yourself');
};
