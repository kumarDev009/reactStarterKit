import { Progress } from 'antd';

const CustomProgressBar = ({ percent = 0, showInfo = true, strokeLinecap = '', strokeColor = '' }) => {
  return (
    <>
      <Progress percent={percent} strokeLinecap={strokeLinecap} strokeColor={strokeColor} showInfo={showInfo} />
    </>
  );
};

export default CustomProgressBar;
