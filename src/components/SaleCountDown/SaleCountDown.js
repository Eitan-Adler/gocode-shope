import React, { useEffect, useRef, useState } from "react";
import "./SaleCountDown.css";
import { PropTypes } from "prop-types";

const SaleCountDown = ({ endSale }) => {
  const [sec, setSec] = useState(63);

  const intervalRef = useRef();
  const secShow = useRef();
  const minShow = useRef();

  secShow.current = sec % 60;
  minShow.current = Math.floor(sec / 60);
  useEffect(() => {
    if (sec !== 0) {
      const id = setInterval(() => {
        setSec(sec - 1);
      }, 1000);
      intervalRef.current = id;
      return () => {
        clearInterval(intervalRef.current);
      };
    } else {
      endSale();
    }
  }, [endSale, sec]);

  return (
    <div className=" sale-count-down">
      {sec === 0
        ? "winter sale on menswear has ended!!"
        : `Just ${
            minShow.current > 0
              ? minShow.current === 1
                ? minShow.current + " minute and "
                : minShow.current + " minutes and "
              : ""
          }${
            secShow.current === 1
              ? secShow.current + " second"
              : secShow.current + " seconds"
          } left until winter sale on menswear ends`}
    </div>
  );
};

SaleCountDown.propTypes = {
  endSale: PropTypes.func,
};

export default SaleCountDown;
