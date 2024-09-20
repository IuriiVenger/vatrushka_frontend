import { Collapse } from 'antd';

import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';

import type { CollapseProps } from 'antd';
import type { FC, ReactNode } from 'react';

import { color } from '@/config/variables';

const expandIcon: CollapseProps['expandIcon'] = (panelProps) => (
  <IoIosArrowDown
    color={color.text.tertiary}
    className={`flex h-6 w-6 self-center transition-all max-sm:h-5 max-sm:w-5 ${panelProps.isActive ? 'rotate-180' : 'rotate-0'}`}
  />
);

type TAccordionProps = {
  title: string;
  text: ReactNode;
};

export const Accordion: FC<TAccordionProps> = ({ title, text }) => {
  const panelStyle: React.CSSProperties = {
    border: `solid 1px ${color.border.secondary}`,
    borderRadius: 16,
  };

  return (
    <Collapse
      className="max-sm:small-padding border border-r-error"
      bordered={false}
      expandIcon={expandIcon}
      expandIconPosition="end"
      items={[
        {
          key: '3',
          label: <h3 className="text-2xl font-medium leading-2xl max-sm:text-lg max-sm:leading-lg">{title}</h3>,
          children: <p className="text-lg leading-lg max-sm:text-base max-sm:leading-base">{text}</p>,
          style: panelStyle,
        },
      ]}
    />
  );
};
