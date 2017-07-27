import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import GithubStream from '../../src/index';
import '../../src/scss/main.scss';

storiesOf('GithubStream', module)
  .addDecorator(withKnobs)
  .addWithInfo(
  'GithubStream',
  `
    Basic usage...
  `,
  () => (
    <div style={{ width: 550 }}>
      <GithubStream user="headzoo" limit={5} />
    </div>
  )
);
