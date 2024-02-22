import { useState } from "react";
const ListRender = () => {
  const [names] = useState(["abhinav", "ajit", "sachin", "vishal"]);

  return (
    <div>
      <ul>
        {names.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <p>{item}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListRender;
