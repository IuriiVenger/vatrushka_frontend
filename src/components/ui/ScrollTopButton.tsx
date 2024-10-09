import { Button } from 'antd';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollToTopButtonVisiblity = () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollToTopButtonVisiblity);

    return () => {
      window.removeEventListener('scroll', handleScrollToTopButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showButton) return null;

  return (
    <Button
      type="primary"
      onClick={handleScrollToTop}
      icon={<IoIosArrowUp />}
      className="fixed bottom-10 right-10 z-50 "
    />
  );
};

export default ScrollTopButton;
