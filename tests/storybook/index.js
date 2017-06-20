'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import GithubStream from '../../src/components/GithubStream';
import '../../src/scss/main.scss';

storiesOf('GithubStream', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'GithubStream',
  `
    Basic usage...
  `,
  () => (
    <div style={{width: "550px"}}>
      <GithubStream user="headzoo" />
    </div>
  )
);
