import PropTypes from 'prop-types';
import './Section.css'

const Section = ({ title, children }) => (
  <section className='Section'>
    <h1>{title}</h1>
    <>{children}</>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;