'use client';

import { Collapse } from 'antd';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import type { CollapseProps } from 'antd';
import type { FC, ReactNode } from 'react';

import { color } from '@/config/variables';

const ExpandIcon: CollapseProps['expandIcon'] = ({ isActive }) => (
  <IoIosArrowDown
    color={color.text.tertiary}
    className={`flex h-6 w-6 self-center transition-all max-sm:h-5 max-sm:w-5 ${isActive ? 'rotate-180' : 'rotate-0'}`}
  />
);

type TAccordionProps = {
  title: ReactNode;
  text: ReactNode;
};

const Accordion: FC<TAccordionProps> = ({ title, text }) => {
  const panelStyle: React.CSSProperties = {
    border: `solid 1px ${color.border.secondary}`,
    borderRadius: 16,
  };

  return (
    <Collapse
      className="max-sm:small-padding border transition-all hover:shadow-accordion"
      bordered={false}
      expandIcon={ExpandIcon}
      expandIconPosition="end"
      items={[
        {
          label: <h3 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">{title}</h3>,
          children: <div className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{text}</div>,
          style: panelStyle,
        },
      ]}
    />
  );
};

export default Accordion;
