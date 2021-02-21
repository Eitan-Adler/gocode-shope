import React, { useEffect, useState } from "react";
import "./SaleCountDown.css";
import { PropTypes } from "prop-types";

const saleDeadLine = Date.parse("2021-02-20 23:52:00:00");
const SaleCountDown = ({ endSale }) => {
  const timeLeft = saleDeadLine - Date.parse(new Date());
  const [totalSec, setTotalSec] = useState(timeLeft / 1000);
  const secShow = Math.floor(totalSec % 60);
  const minShow = Math.floor((totalSec / 60) % 60);
  const hourShow = Math.floor((totalSec / (60 * 60)) % 24);
  const dayShow = Math.floor(totalSec / (60 * 60 * 24));

  useEffect(() => {
    totalSec >= 0
      ? setTimeout(() => {
          setTotalSec(totalSec - 1);
        }, 1000)
      : endSale();
  }, [endSale, totalSec]);

  return (
    <div className=" sale-count-down">
      {totalSec <= 0 ? (
        "winter sale on menswear has ended!!"
      ) : (
        <div>
          <h1 className="headline">Winter Sale ends in:</h1>
          <div className="countdown">
            <ul>
              <li>
                <span className="days">{dayShow}</span>days
              </li>
              <li>
                <span className="hours">{hourShow}</span>Hours
              </li>
              <li>
                <span className="minutes">{minShow}</span>Minutes
              </li>
              <li>
                <span className="seconds">{secShow}</span>Seconds
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
SaleCountDown.propTypes = {
  endSale: PropTypes.func,
};

export default SaleCountDown;
