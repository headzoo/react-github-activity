'use strict';

import React from 'react';

const Error = ({error}) => (
  <div className="rga-error">
    <strong>Github Error</strong>
    {error.message}
    {error.documentation_url ?
      <div>
        <a href={error.documentation_url}>
          {error.documentation_url}
        </a>
      </div>
    : null}
  </div>
);

export default Error;