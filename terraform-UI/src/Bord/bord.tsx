import { useEffect, useState } from "react";
import Mycard from "./Card/card";
import fetchData from "./request";
import Add from "./Add/add";

function FetchBord() {
  const [data, setData] = useState<any>(null);

  // GETリクエストの例
  useEffect(() => {
    fetchData("/proxmox/info").then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>

      <h1>Fetch Board</h1>
      <Add />
      <button
        onClick={() =>
          fetchData("/proxmox/info").then((fetchedData) => {
            setData(fetchedData);
          })
        }
      >
        <span className="material-icons">refresh</span>
      </button>
      {data && (
        <div className="grid grid-cols-2 gap-4">
          {data.map((item: any, index: number) => (
            <div key={index} className="p-4">
              <Mycard
                name={item.name}
                vmid={item.vmid}
                ip={item.ip}
                status={item.status}
              ></Mycard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FetchBord;
