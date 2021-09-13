import { IonPhaser } from "@ion-phaser/react";
import config from "../config/phaser";
function Game() {
  return <IonPhaser game={config} initialize={true} />;
}

export default Game;
