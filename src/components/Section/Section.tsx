import React from 'react';
import { motion } from 'framer-motion';

import s from './Section.module.css';
import { IVariants } from 'types/Variants.interface';

const variants: IVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

interface ISection {
  title: string;
  children?: React.ReactNode;
}

const Section = ({ title, children }: ISection): JSX.Element => (
  <section className={s.container}>
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={variants}
      className={s.container__title}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export default Section;
