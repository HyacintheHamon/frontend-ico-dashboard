import React from 'react';
import classnames from 'classnames/bind';

import s from './styles.scss';

const RenderInput = (props) => {
  const {
    label,
    input,
    meta,
    icon,
    tip,
    ...restProps
  } = props;

  const {
    error,
    invalid,
    active,
    dirty
  } = meta;

  const isInvalid = () => {
    if (!active && invalid && dirty) return true;
    if (!invalid) return false;

    return null;
  };

  const inputClassName = classnames(
    'pt-input',
    'pt-fill',
    isInvalid() ? 'pt-intent-danger' : null
  );

  const formGroupClassName = classnames(
    'pt-form-group',
    isInvalid() ? 'pt-intent-danger' : null
  );

  return (
    <div className={formGroupClassName}>
      {label
        ? (<label className="pt-label">
          {label}
        </label>)
        : null}
      <div className="pt-form-content">
        <input className={inputClassName} {...input} {...restProps}/>
        {tip ? <div className={s.tip}>{tip}</div> : null}
        {isInvalid() ? <div className="pt-form-helper-text">{error}</div> : null}
      </div>
    </div>
  );
};

export default RenderInput;
