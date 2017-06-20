'use strict';

export function commitish(sha) {
  return sha.substr(0, 7);
}