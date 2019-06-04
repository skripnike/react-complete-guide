import React from 'react';
import InlineSVG from 'svg-inline-react';

const Logo = (props) => {
  return (
    <div>
      {/* {svgImg} */}
      <InlineSVG
        src={require('./logo.svg')}
        style={{
          display: 'inline-block',
          height: '123px',
          width: '150px',
        }}
      />
    </div>
  );
};

export default Logo;
