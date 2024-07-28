import style from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={style.options}>
      <button className={style.button} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={style.button}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={style.button} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
