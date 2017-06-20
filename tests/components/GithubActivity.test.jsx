'use strict';

import React from 'react';
import {mount} from 'enzyme';
import GithubActivity from '../../src/components/GithubActivity.jsx';
import test_data from '../data.json';

test('GithubActivity renders activity', () => {
  const ga = mount(
    <GithubActivity user="headzoo" data={test_data} />
  );
  
  expect(ga.find('.rga-event-time').length).not.toBe(0);
  expect(ga.contains(<span>4 days ago</span>)).toBe(true);
});