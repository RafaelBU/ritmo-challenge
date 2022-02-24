import PropTypes from "prop-types";
import * as S from "./styles";

export default function Select({ label, id, options, handleClick }) {
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <select
        name={id}
        id={id}
        onChange={(e) => handleClick({ type: id, event: e })}
      >
        {options.map(({ key, value }) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
