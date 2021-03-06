/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

const cwd = path.join(__dirname, '..');
const cmd = 'node snippets.js';

before(tools.checkCredentials);

it('should setup using implicit credentials', async () =>
  // There's no output, the command should just succeed
  await tools.runAsync(`${cmd} setup-implicit`, cwd));

it('should report errors manually', async () => {
  const output = await tools.runAsync(`${cmd} manual`, cwd);
  assert.strictEqual(output.includes('Done reporting error event!'), true);
  assert.strictEqual(output.includes('Done reporting Error object!'), true);
  assert.strictEqual(output.includes('Done reporting error string!'), true);
});
