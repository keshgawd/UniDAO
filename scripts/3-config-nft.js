import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0x6156DB16562b255664c7E938635D2C6Ad6a04D0e");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "UniDAO Pass",
        description: "This NFT will give you access to UniDAO!",
        image: readFileSync("scripts/assets/NFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();