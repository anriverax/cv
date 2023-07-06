const SubTitle: React.FC<SubTitleProps> = ({ svgId, title, d }) => (
  <div className="flex items-center justify-center">
    <div className="print">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id={svgId} className="w-6 h-6 mr-2">
        <path fill="#20396F" d={d}></path>
      </svg>
    </div>

    <h3 className="text-2xl">{title}</h3>
  </div>
);

export default SubTitle;
