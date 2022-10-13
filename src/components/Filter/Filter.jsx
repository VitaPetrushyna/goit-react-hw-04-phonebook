import PropTypes from 'prop-types';
import { FindLabel, FindInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FindLabel>
      Find contacts by name
      <FindInput type="text" value={value} onChange={onChange}></FindInput>
    </FindLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
