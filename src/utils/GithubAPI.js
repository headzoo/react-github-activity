import Ajax from './Ajax';
import { commitish } from '../utils/git';

const API_BASE   = 'https://api.github.com';
export const URL = 'https://github.com';

class GithubAPI {
  /**
   * Constructor
   */
  constructor() {
    this.ajax = new Ajax();
  }

  /**
   *
   * @param {Ajax} ajax
   * @returns {GithubAPI}
   */
  setAjax(ajax) {
    this.ajax = ajax;
    return this;
  }

  /**
   *
   * @param {String} user
   * @returns {*}
   */
  fetchEvents(user) {
    const url = `${API_BASE}/users/${user}/events`;
    return this.ajax.fetch(url)
      .then((data) => {
        if (data.message !== undefined) {
          throw data;
        }
        return data;
      });
  }

  /**
   * @param {String} user
   * @returns {String}
   */
  static getUserURL(user) {
    return `${URL}/${user}`;
  }

  /**
   * @param {String} repo
   * @returns {String}
   */
  static getRepoURL(repo) {
    return `${URL}/${repo}`;
  }

  /**
   * @param {String} repo
   * @param {String} branch
   * @returns {String}
   */
  static getBranchURL(repo, branch) {
    return `${URL}/${repo}/tree/${branch}`;
  }

  /**
   * @param {String} repo
   * @param {String} sha
   * @returns {String}
   */
  static getCommitURL(repo, sha) {
    return `${URL}/${repo}/commit/${commitish(sha)}`;
  }

  /**
   * @param {String} repo
   * @param {String} issueNumber
   * @param {String} commentID
   * @returns {String}
   */
  static getIssueCommentURL(repo, issueNumber, commentID) {
    return `${URL}/${repo}/issues/${issueNumber}#issuecomment-${commentID}`;
  }
}

export default GithubAPI;
