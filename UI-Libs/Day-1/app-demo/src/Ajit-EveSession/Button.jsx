const Button = ({ label, color, background, onClick, radius }) => {
  return (
    <button
      onClick={onClick}
      style={{
        color,
        backgroundColor: background,
        border: "none",
        margin: 12,
        padding: 12,
        borderRadius: radius,
      }}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Click",
  color: "white",
  background: "black",
  radius: 0,
};

export default Button;
