import { getContract, getSelectedAddress } from "./common";
import abi from "./abi";

function getLairContract() {
  return getContract("0x83633dca596E741c80f4FA032C75518CC251B09b", abi);
}

async function allDragons() {
  console.log("Fetching all dragons");
  const contract = getLairContract();
  return await contract.allDragons();
}

export { allDragons };
