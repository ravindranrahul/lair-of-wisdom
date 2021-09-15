import Phaser from "phaser";
import backgroundScene from "./scenes/backgroundScene";

const config = {
  width: window.innerWidth,
  height: window.innerHeight,
  orientation: Phaser.Scale.Orientation.LANDSCAPE,
  type: Phaser.AUTO,
  scene: {
    init: function () {
      this.cameras.main.setBackgroundColor("#24252A");
    },
    preload: function () {
      this.load.image("bg", "assets/background.png");
    },

    create: function () {
      this.game.scene.add("background", backgroundScene);
      this.game.scene.start("background");
    },
    update: function () {},
  },
};
export default config;
