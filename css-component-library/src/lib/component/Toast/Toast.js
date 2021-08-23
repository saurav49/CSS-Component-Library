import React, { useState, useEffect } from "react";
import {
  RiCloseCircleFill,
  RiErrorWarningFill,
  HiCheckCircle,
  BsInfoCircleFill,
} from "./Toast-icons";
import "./Toast.css";

export const Toast = ({
  message,
  toastType,
  toastPosition,
  toastTime = 3000,
}) => {
  const [showToast, setShowToast] = useState(false);

  let toastIcon;
  switch (toastType) {
    case "toastSuccess":
      toastIcon = <HiCheckCircle className={`toastIconSuccess`} />;
      break;
    case "toastInfo":
      toastIcon = <BsInfoCircleFill className={`toastIconInfo`} />;
      break;
    case "toastWarning":
      toastIcon = <RiErrorWarningFill className={`toastIconWarning`} />;
      break;
    case "toastError":
      toastIcon = <RiCloseCircleFill className={`toastIconSuccess`} />;
      break;
    default:
      toastIcon = <HiCheckCircle className={`toastIconError`} />;
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      setShowToast((showToast) => !showToast);
    }, 0);

    return () => {
      console.log("hello");
      setTimeout(() => {
        setShowToast((showToast) => !showToast);
      }, toastTime);
    };
  }, [toastTime]);

  return (
    <>
      {showToast && (
        <div className={`toast ${toastType} ${toastPosition}`}>
          <div className={`toastImage`}>{toastIcon}</div>
          <div className={`toastMessage`}>
            <p> {message} </p>
          </div>
        </div>
      )}
    </>
  );
};
