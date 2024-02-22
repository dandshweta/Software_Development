import EmojisChildV2 from "./EmojiChildV2";
import EmojisChild from "./EmojisChild";

const EmojisParent = () => {
  const onEmojiSelected = (data) => {
    console.log("Data Parent: ", data);
  };

  return (
    <>
      <p>Parent</p>
      <EmojisChild onSelected={onEmojiSelected} />
      <br />
      <hr />
      <EmojisChildV2 onSelected={onEmojiSelected} />
    </>
  );
};

export default EmojisParent;
