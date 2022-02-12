import PropTypes from 'prop-types';
// import { Button } from './FeedbackOptions.styled.jsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className='BtnSet'>
    {options.map(option => (
      <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;