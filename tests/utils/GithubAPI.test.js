import GithubAPI from '../../src/utils/GithubAPI.js';
import path from 'path';
import readFile from 'fs-readfile-promise';

class Ajax
{
  fetch(url, options) {
    return readFile(path.resolve(__dirname, '../data.json'))
      .then(buffer => JSON.parse(buffer.toString()));
  }
}

describe('Github', () => {
  const api = new GithubAPI();
  api.setAjax(new Ajax());

  it('is not null', () => {

    expect.assertions(1);
    return expect(api.fetchEvents('headzoo')).resolves.not.toBeNull();
  });
});
