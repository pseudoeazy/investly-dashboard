const SummaryCard = ({ title, data, icon: Icon }) => {
  return (
    <div className="w-[22.4375rem] h-[9.9375rem] flex justify-between p-6 rounded-xl border">
      <div className="h-full flex flex-col justify-between  font-semibold ">
        <h3 className="text-lg text-summary-100">{title}</h3>
        <span className="text-[1.75rem] text-summary-200">{data}</span>
      </div>
      <div className="w-[5.9375rem] h-[5.9375rem] ">
        <Icon />
      </div>
    </div>
  );
};

export default SummaryCard;
