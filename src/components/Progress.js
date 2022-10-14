import React, { Component } from "react";
import style from "./Progress.module.css";
export default class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { maxStep, currentStep } = this.props;
    return (
      <div className={style["parent-container"]}>
        {[...Array(maxStep)].map((x, index) => {
          return (
            <div className={style["parent-wrapper"]} key={index + 1}>
              <div
                className={style["progress-line"]}
                style={{
                  width: `calc(${100 / maxStep}vw - ${(maxStep - 1) * 30}px)`,
                  backgroundColor:
                    index + 1 < currentStep ? "#a82222" : "#eeeeee",
                }}
              >
                {index + 1 === currentStep ? (
                  <div className={style["progress-line-child-scaleUp"]}></div>
                ) : (
                  <div
                    style={{
                      backgroundColor:
                        index + 1 <= currentStep ? "#a82222" : "#eeeeee",
                    }}
                    className={style["progress-line-child"]}
                  ></div>
                )}
              </div>

              {index < maxStep - 1 && (
                <div
                  className={style["step"]}
                  style={{
                    backgroundColor:
                      index + 1 > currentStep ? "#eeeeee" : "#a82222",
                    color: index + 1 > currentStep ? "#9c9c9c" : "white",
                  }}
                >
                  {index + 1 < currentStep ? "✓" : index + 1}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
