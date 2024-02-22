import { useState } from "react";

const FunctionalComponents = () => {
  const [formComp, setFormComp] = useState({
    text: "",
    email: "",
    password: "",
    radio: "",
    textArea: "",
    select: "",
    checkbox: "",
    range: "",
  });

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormComp((prevFormComp) => {
      return {
        ...prevFormComp,
        [name]: value,
      };
    });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div>
        <h3>Text Input</h3>
        <input
          name="text"
          type="text"
          value={formComp.text}
          onChange={onFormChange}
        />
      </div>
      <div>
        <h3>Email Address</h3>
        <input
          name="email"
          type="email"
          value={formComp.email}
          onChange={onFormChange}
        />
      </div>
      <div>
        <h3>Password</h3>
        <input
          name="password"
          type="password"
          value={formComp.password}
          onChange={onFormChange}
        />
      </div>
      <div>
        <h3>Radio: Gender</h3>
        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>Male</span>
        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>Female</span>
      </div>
      <div>
        <h3>TextArea Input</h3>
        <textarea
          name="textArea"
          value={formComp.textArea}
          onChange={onFormChange}
        />
      </div>

      <div>
        <h3>Select City</h3>
        <select name="select" value={formComp.select} onChange={onFormChange}>
          <option value="">City Name</option>
          <option value="option1">Hyderabad</option>
          <option value="option2">Pune</option>
          <option value="option3">Indore</option>
        </select>
      </div>
      <div>
        <h3>Hobbies</h3>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Reading</span>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Writing</span>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Podcast</span>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Swimming</span>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Skating</span>

        <input
          type="checkbox"
          name="checkbox"
          value={formComp.checkbox}
          onChange={onFormChange}
          id=""
        />
        <span>Listening Music</span>
      </div>
      <div>
        <h3>Radio: Rating</h3>
        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>1</span>
        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>2</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>3</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>4</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>5</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>6</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>7</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>8</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>9</span>

        <input
          name="radio"
          type="radio"
          value={formComp.radio}
          onChange={onFormChange}
        />
        <span>10</span>
      </div>

      <div>
        <input
          type="range"
          name="range"
          value={formComp.range}
          onChange={onFormChange}
          id=""
        />
      </div>
    </div>
  );
};
export default FunctionalComponents;
