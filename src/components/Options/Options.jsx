import css from './Options.module.css';

export default function Options({ updateFeedback, total, reset }) {
  return (
    <div className={css.list}>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} type="button" onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
