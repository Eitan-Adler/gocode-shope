import React from "react";
import "./SaleCountDown.css";

class SaleCountDown extends React.Component {
  state = {
    sec: 63,
  };
  secShow = 3;
  minShow = 1;
  intervalId = 0;
  countDown = () => {
    this.setState(({ sec }) => ({ sec: sec - 1 }));
    this.secShow = this.state.sec % 60;
    this.minShow = Math.floor(this.state.sec / 60);
  };

  tick = () =>
    setInterval(() => {
      this.state.sec > 0 ? this.countDown() : this.stopTick();
    }, 1000);
  stopTick = () => {
    clearInterval(this.intervalId);
    this.props.endSale();
  };
  componentDidMount() {
    this.intervalId = this.tick();
  }
  render() {
    return (
      <div className=" sale-count-down">
        {this.state.sec === 0
          ? "winter sale on menswear has ended!!"
          : `Just ${
              this.minShow > 0
                ? this.minShow === 1
                  ? this.minShow + " minute and "
                  : this.minShow + " minutes and "
                : ""
            }${
              this.secShow === 1
                ? this.secShow + " second"
                : this.secShow + " seconds"
            } left until winter sale on menswear ends`}
      </div>
    );
  }
}

export default SaleCountDown;
