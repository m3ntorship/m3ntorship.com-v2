import type { ReactElement } from 'react';
import React from 'react';

const Alumni = (): ReactElement => {
  return (
    <div className='alumni'>
      <div className='container'>
        <div className='info'>
          <div>
            <h1>Meet Our Alumni</h1>
            <p>
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet
            </p>
          </div>
          <div>
            <button>View All Alumni</button>
          </div>
        </div>
        <div className='slide'>
          <div> Slide One Here </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
