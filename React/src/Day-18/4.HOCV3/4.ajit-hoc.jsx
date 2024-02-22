import React from "react";

const withToggle = (WrappedComponent) => {
  return function WithToggle(props) {
    const [toggle, setToggle] = React.useState(false);

    const toggleHandler = () => {
      setToggle((prevState) => !prevState);
    };

    return (
      <WrappedComponent
        toggle={toggle}
        toggleHandler={toggleHandler}
        {...props}
      />
    );
  };
};

// Usage
const MyComponent = ({ toggle, toggleHandler }) => {
  return (
    <div>
      <button onClick={toggleHandler}>Toggle</button>
      {toggle && <p>Toggle is ON</p>}
    </div>
  );
};

const MyComponentWithToggle = withToggle(MyComponent);

export default MyComponentWithToggle;
