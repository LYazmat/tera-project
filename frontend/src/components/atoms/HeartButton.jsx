import React, { useState } from "react";
import Heart from "react-heart";

export default function HeartButton() {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{ width: "1.5rem", position: "absolute", left: "3%", top: "3%" }}
    >
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        style={{
          fill: active ? "red" : "white",
          stroke: active ? "red" : "white",
          filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 1))",
        }}
      />
    </div>
  );
}
