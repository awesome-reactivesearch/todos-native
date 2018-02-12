import PropTypes from 'prop-types';

export default PropTypes.shape({
  data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      createdAt: PropTypes.number,
    })),
});
