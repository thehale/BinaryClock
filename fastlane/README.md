fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios certificates

```sh
[bundle exec] fastlane ios certificates
```

Make sure to copy the `.env.dist` to `.env` and fill all values before running any lanes

Fetch certificates and provisioning profiles

### ios build

```sh
[bundle exec] fastlane ios build
```

Build the iOS application.

### ios beta

```sh
[bundle exec] fastlane ios beta
```

Publish a beta release to the App Store

### ios custom_lane

```sh
[bundle exec] fastlane ios custom_lane
```

Description of what the lane does

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
