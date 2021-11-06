import React from 'react';

const Child = React.forwardRef(({}, ref) => {
  React.useImperativeHandle(ref, () => ({
    haha,
  }));
  const haha = () => {
    return 'nihao';
  };
  return <div>child</div>;
});

export default Child;
