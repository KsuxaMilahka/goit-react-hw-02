import style from './Feedback.module.css';
const Feedback = ({ feedbackCounts, total, positivePercentage }) => {
  return (
    <div className={style.feedback}>
      <ul className={style.list}>
        <li>Good:{feedbackCounts.good}</li>
        <li>Neutral:{feedbackCounts.neutral}</li>
        <li>Bad:{feedbackCounts.bad}</li>
        <li>Total:{total}</li>
        <li>Positive:{positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
