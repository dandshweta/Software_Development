import TextView from "../Ajit-EveSession/TextView";

const TextDemo = () => {
  return (
    <div>
      <TextView label={"Ajit"} />
      <TextView label={"Arun"} size={20} />
      <TextView label={"Amit"} size={30} color={"red"} bold />
      <TextView label={"Arjun"} size={34} color={"green"} />
      <TextView label={"Abhinav"} size={38} color={"purple"} />
    </div>
  );
};

export default TextDemo;
