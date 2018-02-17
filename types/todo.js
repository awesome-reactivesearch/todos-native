import PropTypes from 'prop-types';

// all the todos have the following structure
export default PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        completed: PropTypes.bool,
        createdAt: PropTypes.number,
    })),
});
