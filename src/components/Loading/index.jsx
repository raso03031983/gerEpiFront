import React from 'react';

import './loading.css';

function Loading({
  active = true,
}) {
  const loadClass = active ? 'active' : '';
  return (
    <div className="simple-loading">
      <div className={`simple-loading__overlay ${loadClass}`}>
        <i className="simple-loading__spinner fa fa-circle-notch" />
      </div>
    </div>
  );
}

export default Loading;