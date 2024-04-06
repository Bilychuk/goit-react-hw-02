import css from './Feedback.module.css';

export default function Feedback({ value, total, positiveFeedbacks }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {value.good}</li>
      <li className={css.item}>Neutral: {value.neutral}</li>
      <li className={css.item}>Bad: {value.bad}</li>
      <li className={css.item}>Total: {total};</li>
      <li className={css.item}>Positive: {positiveFeedbacks}%</li>
    </ul>
  );
}
