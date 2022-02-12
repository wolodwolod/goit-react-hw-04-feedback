import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => (
  <>
    <p>{message}</p>
  </>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;