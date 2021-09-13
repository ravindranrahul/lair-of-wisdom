import Phaser from "phaser";

const config = {
  width: window.innerHeight,
  height: window.innerHeight,
  type: Phaser.AUTO,
  scene: {
    init: function () {
      this.cameras.main.setBackgroundColor("#24252A");
    },
    create: function () {
      this.helloWorld = this.add.text(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "Hello World",
        {
          font: "40px Arial",
          fill: "#ffffff",
        }
      );
      this.helloWorld.setOrigin(0.5);
    },
    update: function () {
      this.helloWorld.angle += 1;
    },
  },
};
export default config;
