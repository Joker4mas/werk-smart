import React from 'react';

interface ProgressCircleProps {
  progress: number;
  text: string;
}
interface ProgressLabelProps {
  text: string;
}

const ProgressLabel: React.FC<ProgressLabelProps> = ({ text }) => {
    return <span className="text-sm text-gray-400">{text}</span>;
  };

const ProgressCircle: React.FC<ProgressCircleProps> = ({ progress, text }) => {
    const progressColor = progress >= 51  ? 'green-500' : 'gray-400';

  
    return (
      <div className={`circle rounded-full inline-flex w-24 h-24 items-center text-center justify-center flex-col border-2 border-${progressColor}`}>
        <p className="text-2xl font-bold text-${progressColor}">{progress}%</p>
        <ProgressLabel text={text} />
       
      </div>
    );
    };
  
  export default ProgressCircle;