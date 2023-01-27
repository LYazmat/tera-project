import React from "react";

import nouserimage from "../assets/nouserimage.gif";

// src="https://github.com/lyazmat.png"

export default function Avatar(props) {
  return (
    <img
      src={nouserimage}
      alt="Foto do Usuário"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
}
