import '@testing-library/jest-dom';

if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute('open', '');
  };
}

if (!HTMLDialogElement.prototype.close) {
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute('open');
    this.dispatchEvent(new Event('close'));
  };
}

if (!HTMLDialogElement.prototype.show) {
  HTMLDialogElement.prototype.show = function () {
    this.setAttribute('open', '');
  };
}
