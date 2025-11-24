import { useState, useEffect } from "react";
import "./card.css";
import fetchData from "../request";

// propsの型を定義
interface CardProps {
  name?: string;
  vmid?: number;
  ip?: number;
  status?: string;
}

// propsを引数として受け取る
function Card({ name, vmid, ip, status }: CardProps) {
  const [buttonText, setButtonText] = useState("RUN");

  useEffect(() => {
    if (status === "running") {
      setButtonText("STOP");
    } else {
      setButtonText("RUN");
    }
  }, [status]);

  function handleClick(vmid: number) {
    console.log("Button clicked for VMID:", vmid);
    if (buttonText === "RUN") {
      // RUNボタンがクリックされたときの処理
      fetchData(`/proxmox/start`, { vmid });
      setButtonText("STOP");
    } else {
      // STOPボタンがクリックされたときの処理
      fetchData(`/proxmox/stop`, { vmid });
      setButtonText("RUN");
    }
  }
  return (
    <>
      <div className="container">
        <div className="border shadow-lg p-4">
          <div className="text-2xl">Name : {name}</div>
          <div>VMID : {vmid} </div>
          <div>IP : {ip} </div>
          <div>Status : {status} </div>
          <button onClick={() => handleClick(vmid!)}>{buttonText}</button>
        </div>
      </div>
    </>
  );
}

export default Card;
