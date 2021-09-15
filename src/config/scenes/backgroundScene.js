const backgroundScene = function () {};
backgroundScene.prototype = {
  init: function () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.centerX = this.width * 0.5;
    this.centerY = this.height * 0.5;
  },

  scaleImage: function (tpe, obj) {
    if (tpe === "bg") {
      if (this.width / this.height > 1920 / 1080) {
        obj.setScale((1 / obj.width) * this.width);
      } else {
        obj.setScale((1 / obj.height) * this.height);
      }
    } else if (tpe === "main" || tpe === "pre" || tpe === "end") {
      if (this.width / this.height > 1920 / 1080) {
        obj.setScale((1 / obj.height) * this.height * 0.9);
      } else {
        obj.setScale((1 / obj.width) * this.width * 0.85);
      }
    }
  },

  create: function () {
    console.log(this);
    this.background = this.add.image(0, 0, "bg");
    this.background.setOrigin(0.5);
    this.scaleImage("bg", this.background);
    this.background.setPosition(this.centerX, this.centerY);
  },
};

export default backgroundScene;
