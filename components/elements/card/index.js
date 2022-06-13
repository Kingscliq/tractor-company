// hello
import React from 'react';
import styles from './card.module.scss';

export const DashCard = ({ children, className }) => (
  <section
    className={[styles.dash__card, className, 'shadow bg-white'].join(' ')}
  >
    {children}
  </section>
);

export const DarkDashCard = ({ children }) => {
  return <section className={styles.dark__dash__card}>{children}</section>;
};

const Card = ({ children, className, style }) => {
  return (
    <div
      className={[styles.card__container, className, 'shadow'].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
};
export default Card;
