import ChildView from "./2.child";

const ParentView = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <ChildView name="Ajit" city="Mumbai" />
      <ChildView name="Sohail" city="Bhopal" />
      <ChildView name="Khusi" city="Bhopal" />
      <ChildView name="Reetika" city="Delhi" />
      <ChildView name="Arun" city="Morena" />
      <ChildView name="Varun" city="Pune" />
      <ChildView name="Sachin" city="Bangalore" />
      <ChildView name="Deepak" city="Bihar" phone={1234} />
      <ChildView />
    </div>
  );
};

export default ParentView;
