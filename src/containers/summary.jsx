import SummaryCard from "components/summary-card";
import summaryData from "data/summary";

const Summary = () => {
  return (
    <section className="flex space-x-6 mt-6">
      {summaryData.map((summary, idx) => (
        <SummaryCard key={idx} {...summary} />
      ))}
    </section>
  );
};

export default Summary;
