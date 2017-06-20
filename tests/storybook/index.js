'use strict';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import GithubActivity from '../../src/components/GithubActivity';
import '../../src/scss/main.scss';

storiesOf('GithubActivity', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'GithubActivity',
  `
    Basic usage...
  `,
  () => (
    <div style={{width: "550px"}}>
      <GithubActivity user="headzoo" />
    </div>
  )
);
