import { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTable } from "../../redux/features/tableSlice";

const RANDOM_TABLE_NUMBER = Math.floor(Math.random() * 100);

const Scan = () => {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {status === null && (
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              dispatch(setTable(RANDOM_TABLE_NUMBER));
              setStatus({ type: "success", message: `Your table is ${RANDOM_TABLE_NUMBER}` });
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
