import React from "react";
import Button from "@material-ui/core/Button";

const Test = () => {
  const data = [
    { buttonName: "hi", classes: ["IX", "X", "XI", "XII"] },
    { buttonName: "good", classes: ["IX", "X", "XI", "XII"] },
    { buttonName: "nice", classes: ["IX", "X", "XI", "XII"] },
    { buttonName: "bye", classes: ["IX", "X", "XI", "XII"] },
    { buttonName: "hello", classes: ["IX", "X", "XI", "XII"] },
  ];

  return (
    <>
      {data.map((d) => (
        <div>
          <Button>{d.buttonName}</Button>
          {d.classes.map((f) => (
            <div>
              {" "}
              <Button>{f}</Button>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Test;
