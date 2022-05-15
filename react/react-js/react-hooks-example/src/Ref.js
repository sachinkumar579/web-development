import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <label htmlFor="">useRef</label> <br></br>
      <input type="text" placeholder="Type.." ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </div>
  );
};

export default Ref;
