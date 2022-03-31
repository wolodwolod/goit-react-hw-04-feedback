import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import { memo } from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log('render FeedbackOptions');
return (
  <div className={s.BtnSet}>
    {options.map(option => (
      <button type="button" className={s.BtnSet__button} key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
)};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
          PropTypes.string
      )
  .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default memo(FeedbackOptions);