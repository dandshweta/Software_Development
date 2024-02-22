const Hello = ({ ch, val }) => {
  //   ch ? changeToF(val) : changeToC(val);

  const changeToF = () => {};
  const changeToC = () => {};


  

  return (
    <div className="tes">
      <button onClick={() => (ch ? changeToF(val) : changeToC(val))}>
        To Farenhite
      </button>
      <button onClick={() => (ch ? changeToF(val) : changeToC(val))}>
        To Celcius
      </button>
    </div>
  );
};

export default Hello;
