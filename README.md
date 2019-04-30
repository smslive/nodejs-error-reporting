[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Stackdriver Error Reporting: Node.js Client](https://github.com/googleapis/nodejs-error-reporting)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/error-reporting.svg)](https://www.npmjs.org/package/@google-cloud/error-reporting)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-error-reporting/master.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-error-reporting)




> Node.js idiomatic client for [Error Reporting][product-docs].

[Stackdriver Error Reporting](https://cloud.google.com/error-reporting/docs/) aggregates and displays errors produced in your running cloud services.


* [Stackdriver Error Reporting Node.js Client API Reference][client-docs]
* [Stackdriver Error Reporting Documentation][product-docs]
* [github.com/googleapis/nodejs-error-reporting](https://github.com/googleapis/nodejs-error-reporting)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable the Stackdriver Error Reporting API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/error-reporting
```


### Using the client library

```javascript
  // Imports the Google Cloud client library
  const {ErrorReporting} = require('@google-cloud/error-reporting');

  // Instantiates a client
  const errors = new ErrorReporting();

  // Reports a simple error
  errors.report('Something broke!');

```
## Overview

This module provides custom Stackdriver Error Reporting support for Node.js applications. [Stackdriver Error Reporting](https://cloud.google.com/error-reporting/) is a feature of
Google Cloud Platform that allows in-depth monitoring and viewing of errors reported by applications running in almost any environment.

However, note that [@google-cloud/logging-winston](https://github.com/googleapis/nodejs-logging-winston) and [@google-cloud/logging-bunyan](https://github.com/googleapis/nodejs-logging-bunyan) automatically integrate with the Error Reporting service for Error objects logged at severity `error` or higher, for applications running on Google Cloud Platform.

Thus, if you are already using Winston or Bunyan in your application, and don't need custom error reporting capabilities, you do not need to use the `@google-cloud/error-reporting` library directly to report errors to the Error Reporting Console.

![Stackdriver Error Reporting overview](https://raw.githubusercontent.com/googleapis/nodejs-error-reporting/master/doc/images/errors-overview.png)

Here's an introductory video that provides some more details:

[![Learn about Error Reporting in Stackdriver](https://img.youtube.com/vi/cVpWVD75Hs8/0.jpg)](https://www.youtube.com/watch?v=cVpWVD75Hs8)

## When Errors Are Reported

The `reportMode` configuration option is used to specify when errors are reported to the Error Reporting Console.  It can have one of three values:
* `'production'` (default): Only report errors if the NODE_ENV environment variable is set to "production".
* `'always'`: Always report errors regardless of the value of NODE_ENV.
* `'never'`: Never report errors regardless of the value of NODE_ENV.

The `reportMode` configuration option replaces the deprecated `ignoreEnvironmentCheck` configuration option.  If both the `reportMode` and `ignoreEnvironmentCheck` options are specified, the `reportMode` configuration option takes precedence.

The `ignoreEnvironmentCheck` option should not be used.  However, if it is used, and the `reportMode` option is not specified, it can have the values:
* `false` (default): Only report errors if the NODE_ENV environment variable is set to "production".
* `true`: Always report errors regardless of the value of NODE_ENV.

See the [Configuration](#configuration) section to learn how to specify configuration options.


## Samples

Samples are in the [`samples/`](https://github.com/googleapis/nodejs-error-reporting/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Explicit setup | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/explicitSetup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/explicitSetup.js,samples/README.md) |
| Express integration | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/express.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/express.js,samples/README.md) |
| Implicit setup | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/implicitSetup.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/implicitSetup.js,samples/README.md) |
| Manual reporting | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/manual.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/manual.js,samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/nodejs-error-reporting/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-error-reporting&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Stackdriver Error Reporting Node.js Client API Reference][client-docs] documentation
also contains samples.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-error-reporting/blob/master/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-error-reporting/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/error-reporting/latest/
[product-docs]: https://cloud.google.com/error-reporting
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouderrorreporting.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started