import React from "react";

export const Button = ({ btnContent, btnStyles }) => {
  return (
    <div>
      <button
        className={`${btnStyles} `}
        style={{
          background:
            "linear-gradient(98.7deg, #1505a4 19.95%, #970b22 89.51%)",
        }}
      >
        {btnContent}
      </button>
    </div>
  );
};
