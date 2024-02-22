import "./TextView.style.css";

const TextView = ({ label, size, color, bold }) => {
  return (
    <p className={bold ? "bold" : ""} style={{ color, fontSize: size }}>
      {label}
    </p>
  );
};

TextView.defaultProps = {
  label: "",
  size: 11,
  color: "black",
  bold: false,
};

export default TextView;
