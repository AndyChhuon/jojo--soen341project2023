import React, { useEffect, useState } from "react";
import "./ModelLoading.less";

export default function ModelLoading(props) {
  const { progress } = props;
  const [progressState, setProgressState] = useState(`${progress}%`);
  useEffect(() => {
    setProgressState(`${progress}%`);
  }, [progress]);
  return (
    <div className="ModelLoader">
      <h1>LOADING</h1>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: progressState }} />
      </div>
    </div>
  );
}
