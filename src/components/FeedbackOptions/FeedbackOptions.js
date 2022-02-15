import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.BtnSet}>
    {options.map(option => (
      <button type="button" className={s.BtnSet__button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
          PropTypes.number
      )
  .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;