import BoxCipher from "../CipherComponents/BoxCipher";
import Rot13 from "../CipherComponents/Rot13";

const Body = () => {
  return (
    <div>
      <BoxCipher />
      <Rot13 />
    </div>
  );
};

export default Body;
