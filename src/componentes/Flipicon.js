import { useState } from "react";
export const Flipicon = (props) => {
  const { icono1, icono2 } = props;
  const [icono, setIcono] = useState(`fas ${icono1}`);
  const cambiarIcono = () => {
    icono === `fas ${icono1}`
      ? setIcono(`fas ${icono2}`)
      : setIcono(`fas ${icono1}`);
  };
  return <i className={icono} onClick={cambiarIcono}></i>;
};
