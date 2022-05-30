// hello
import React, { useRef, useState } from 'react';

const Input = ({
  disabled,

  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  success,
  props,

  inputRef,
  errorMessage,
  focus,

  icon,
  onPasswordToggle,
}) => {
  return (
    <div
      className={[
        `h-12 w-full overflow-hidden my-2 mx-0 transition-all duration-500 ease-linear ${
          error
            ? 'bg-error-light border-2 border-border-negative text-neutral-dark'
            : 'bg-light-input'
        } ${
          success || focus
            ? 'border-2 border-secondary text-neutral-dark'
            : null
        }`,
        className,
      ].join(' ')}
    >
      <div className="flex items-center justify-between">
        <input
          type={type || 'text'}
          className={[
            'bg-transparent w-full h-12 outline-none border-0 px-4 py-2 text-neutral-mid',
          ].join(' ')}
          placeholder={placeholder || 'this is a placeholder'}
          onFocus={focus}
          value={value}
          onClick={onClick}
          error={error}
          disabled={disabled}
          onChange={onChange}
          name={name}
          ref={inputRef}
          {...props}
        />
        {icon && (
          <span
            className="px-4 flex items-center justify-center"
            onClick={onPasswordToggle}
          >
            {icon}
          </span>
        )}
      </div>

      <div>{errorMessage}</div>
    </div>
  );
};

export default Input;
