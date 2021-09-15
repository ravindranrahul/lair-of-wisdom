import { IonPhaser } from "@ion-phaser/react";
import config from "../config/phaser";
import { allDragons } from "../utils/ContractProvider";

function Game() {
  async function getDragons() {
    const dragons = await allDragons();
    console.log(dragons);
  }
  return (
    <div>
      {/* <button onClick={getDragons}>Get Dragons</button> */}
      <IonPhaser game={config} initialize={true} />
    </div>
  );
}

export default Game;
