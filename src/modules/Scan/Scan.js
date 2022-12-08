import { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scan = () => {
  const [tableNumber, setTableNumber] = useState("No result");
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          alert(result, error);
          if (!!result) {
            setTableNumber(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        className="w-full"
        style={{ width: "100%" }}
      />
      <p>{tableNumber}</p>
    </>
  );
};

export default Scan;
