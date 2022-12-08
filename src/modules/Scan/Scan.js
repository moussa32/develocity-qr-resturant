import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

const RANDOM_TABLE_NUMBER = Math.floor(Math.random() * 100);

const Scan = () => {
  const [tableNumber, setTableNumber] = useState("Didn't read the table number yet");
  const [status, setStatus] = useState(null);
  let navigate = useNavigate();

  return (
    <>
      {status === null && (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setStatus({ type: "success", message: `Your table is ${RANDOM_TABLE_NUMBER}` });
              setTableNumber(RANDOM_TABLE_NUMBER);
              setTimeout(() => navigate("/start"), 3000);
            }

            if (!!error) {
            }
          }}
          key="environment"
          constraints={{ facingMode: "environment" }}
          scanDelay={5000}
          className="h-36"
        />
      )}

      {status && (
        <p
          className={`${
            status.type === "success" ? "text-green-500" : "text-red-500"
          } text-center font-bold fs text-xl`}
        >
          {status.message}
        </p>
      )}
    </>
  );
};

export default Scan;
