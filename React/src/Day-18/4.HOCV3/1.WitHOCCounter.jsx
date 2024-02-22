import { useState } from "react";
import WrapperComp from "./WrapperComp";

const WitHOCCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <WrapperComp loading={counter % 5 !== 0}>
        <p>Value: {counter}</p>
        <h1>Ajit</h1>
        <h1>Sushant</h1>
        <h1>Priyansh</h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          dolorem quisquam adipisci dolore vitae? Fuga cumque, itaque officia
          autem enim harum, perspiciatis minus quos magnam in natus reiciendis
          laboriosam quisquam.
        </div>
      </WrapperComp>
    </div>
  );
};

export default WitHOCCounter;
