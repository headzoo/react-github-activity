import React from 'react';
import {mount} from 'enzyme';
import GithubStream from '../../src/components/GithubStream';
import test_data from '../data.json';

test('GithubStream renders activity', () => {
  const ga = mount(
    <GithubStream user="headzoo" data={test_data} />
  );

  expect(ga.find('.rga-event-time').length).not.toBe(0);
  expect(ga.contains(<span>4 days ago</span>)).toBe(true);
});
