// hello
import Image from 'next/image';
import React from 'react';
import { loader } from '../../public/assets/icons';

const btn = `text-sm font-medium cursor-pointer w-full rounded-md lg:text-base text-sm flex items-center justify-center hover:opacity-90 transition ease duration-500`;

const Button = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  loadingText,
  className,
  loadingIcon,
  btnIcon,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[btn, className, `${loading ? 'bg-neutral-mid' : null}`].join(
        ' '
      )}
      style={loading || disabled ? { cursor: 'not-allowed' } : null}
    >
      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="ml-2">
            {<Image src={loader} height={40} width={40} alt="loading..." /> ||
              'icon'}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div>{label || 'Button Text'}</div>
          {btnIcon && <div className="ml-3">{btnIcon}</div>}
        </div>
      )}
    </button>
  );
};

export default Button;
