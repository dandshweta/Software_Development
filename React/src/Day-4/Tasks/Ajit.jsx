import { useState } from "react";

const TestForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    gendar: "",
    hobbies1: "1",
    hobbies2: "2",
    hobbies3: "3",
    rating: 0,
  });
  const handalInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value })
    setFormData((prv) => ({ ...prv, [name]: value }));
  };

  const handalSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handalSubmit}>
      <p>Form</p>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="username"
          onChange={handalInputChange}
        />
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          onChange={handalInputChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          onChange={handalInputChange}
        />
      </div>
      <div>
        <select name="city" onChange={handalInputChange}>
          <option value="mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
          <option value="Goa">Goa</option>
        </select>
      </div>
      <label> Gander</label>
      <div>
        <input
          type="radio"
          value="male"
          name="gendar"
          onChange={handalInputChange}
        />
        <label>Male</label>
        <input
          type="radio"
          value="Female"
          name="gendar"
          onChange={handalInputChange}
        />
        <label>Female</label>
        <input
          type="radio"
          value="other"
          name="gendar"
          onChange={handalInputChange}
        />
        <label>other</label>
      </div>
      <label>Hobbies</label>
      <div>
        <input
          type="checkbox"
          value="1"
          name="hobbies1"
          onChange={handalInputChange}
        />
        <label>1</label>
        <input
          type="checkbox"
          value="2"
          onChange={handalInputChange}
          name="hobbies2"
        />
        <label>2</label>
        <input
          type="checkbox"
          value="3"
          onChange={handalInputChange}
          name="hobbies3"
        />
        <label>3</label>
      </div>
      <div>
        <label>Rating</label>
        <input
          type="range"
          min="0"
          max="10"
          name="rating"
          onChange={handalInputChange}
          value={formData.rating}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;
