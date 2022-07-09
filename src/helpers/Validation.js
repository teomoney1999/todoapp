function Validation () {
  this.hasProps = function (obj, key) {
    return obj.hasOwnProperty(key) ? obj.key : "";
  };
};

export default new Validation();
