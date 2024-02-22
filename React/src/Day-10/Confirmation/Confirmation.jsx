import { useState } from "react";

const Confirmation = () => {
  const [options] = useState({
    yes: "Show message of yes",
    no: "Show message of no",
    decline: "Show message of decline",
  });
};
