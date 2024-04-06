import css from './Options.module.css';

export default function Options({ updateFeedback, total, reset }) {
  if (total === 0) {
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
      </div>
    );
  } else {
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
        <button className={css.button} type="button" onClick={reset}>
          Reset
        </button>
      </div>
    );
  }
}
