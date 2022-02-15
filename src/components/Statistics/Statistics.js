import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
    
    <ul>
        <li className={s.StatsItem}>Good: <span className={s.StatsItem__value}>{good}</span></li>
        <li className={s.StatsItem}>Neutral: <span className={s.StatsItem__value}>{neutral}</span></li>
        <li className={s.StatsItem}>Bad: <span className={s.StatsItem__value}>{bad}</span></li>
        <li className={s.StatsItem}>Total: <spa className={s.StatsItem__value}>{total}</spa></li>
        <li className={s.StatsItem}>Positive feedback: <span className={s.StatsItem__value}>{positivePercentage} %</span></li>
    </ul>
  
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;