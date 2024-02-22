import { useState } from "react";

const Welcome = () => {
  const [message, setMessage] = useState("Reetika");
  const [newMessage, setNewMessage] = useState("Siddhant");

  const onInputChange = (ev) => {
    console.log("EV: ", ev.target);
    setMessage(ev.target.value);
  };

  console.log("Re-render: ", message, newMessage);
  return (
    <div>
      <div>
        <input
          type="text"
          value={message}
          onChange={onInputChange}
          onBlur={onInputChange}
          onFocus={onInputChange}
          onKeyDown={onInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </div>

      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
      <p>Hello {newMessage}</p>
      <p>Hello {message}</p>
    </div>
  );
};

export default Welcome;
