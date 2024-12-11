import { TimelineProps } from 'antd';
import { TimelineItemProps } from 'antd/es/timeline';
import { Timeline } from 'antd/lib';
import { FC, useEffect, useRef } from 'react';

type TCustomTimelineProps = TimelineProps & {
  items: TimelineItemProps[];
};

const CustomTimeline: FC<TCustomTimelineProps> = (props) => {
  const { items } = props;
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const htmlItems = timelineRef.current?.querySelectorAll('.ant-timeline-item');

    htmlItems?.forEach((item, index) => {
      const currentGreenHead = item.querySelector('.ant-timeline-item-head-green');
      const nextItem = htmlItems[index + 1];
      const nextGreenHead = nextItem ? nextItem.querySelector('.ant-timeline-item-head-green') : null;
      const tail = item.querySelector('.ant-timeline-item-tail');

      if (currentGreenHead && nextGreenHead) {
        tail?.classList.add('border-s-success');
      } else {
        tail?.classList.remove('border-s-success');
      }
    });
  }, [items]);

  return (
    <div ref={timelineRef}>
      <Timeline {...props} />
    </div>
  );
};

export default CustomTimeline;
