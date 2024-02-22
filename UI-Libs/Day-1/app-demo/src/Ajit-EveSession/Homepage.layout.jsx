import Button from "./Button";

const HomepageView = () => {
  return (
    <>
      <Button
        label={"Change Color"}
        radius={100}
        onClick={() => console.log("Change Color Clicked")}
      />
      <Button
        label={"Change Date"}
        onClick={() => console.log("Change Date Clicked")}
      />
      <Button
        background="blue"
        onClick={() => console.log("Change Color Clicked")}
      />
      <Button
        background="red"
        label={"Change Light"}
        onClick={() => console.log("Change Light Clicked")}
      />
    </>
  );
};

export default HomepageView;
