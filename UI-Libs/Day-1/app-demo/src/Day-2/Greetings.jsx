function Greetings({ name, city }) {
  return (
    <div>
      <p>
        Hello {name}. You are from {city}
      </p>
    </div>
  );
}

Greetings.defaultProps = {
  city: "Delhi",
};

export default Greetings;
