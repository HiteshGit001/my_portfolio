import React, { FC } from "react";
import Lottie from "react-lottie";

interface ILoader {
  jsonFile: object,
}
const Loader: FC<ILoader> = (props: any) => {
  const { jsonFile } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: jsonFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="skeleton_loader_container">
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        isStopped={false}
        isPaused={false}
      />
    </div>
  );
};

export default Loader;
