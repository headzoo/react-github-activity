'use strict';

import React from 'react';
import GithubAPI from '../utils/GithubAPI';
import { commitish } from '../utils/git';

export const ActorLink = ({actor}) => (
  <a href={GithubAPI.getUserURL(actor.login)}>
    {actor.display_login}
  </a>
);

export const RepoLink = ({repo}) => (
  <a href={GithubAPI.getRepoURL(repo.name)}>
    {repo.name}
  </a>
);

export const BranchLink = ({repo, payload}) => (
  <a href={GithubAPI.getBranchURL(repo.name, payload.ref)} className="rgs-branch-name">
    {payload.ref}
  </a>
);

export const CommitLink = ({repo, commit}) => (
  <a href={GithubAPI.getCommitURL(repo.name, commit.sha)}>
    {commitish(commit.sha)}
  </a>
);

export const IssueLink = ({repo, issue, comment}) => (
  <a href={GithubAPI.getIssueCommentURL(repo.name, issue.number, comment.id)}>
    {repo.name}#{issue.number}
  </a>
);

