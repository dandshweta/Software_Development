import { GridLoader } from "react-spinners";

const WrapperComp = ({ loading, children }) => {
  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "12px" }}
      >
        <GridLoader color="#d66136" />
      </div>
    );
  }

  return children;
};

export default WrapperComp;
