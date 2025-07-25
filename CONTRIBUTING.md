<!--
 Copyright (c) 2022 Joseph Hale

 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
-->

# Contributing to `BinaryClock`

Thank you for your interest in contributing to `BinaryClock`! There are lots of ways you can do so:

- [Sponsoring the developer](https://github.com/sponsors/thehale) to fund the app's continued presence on the App Store and Google Play.
- [Submitting feature requests](https://github.com/thehale/BinaryClock/issues/new/choose).
- [Reporting bugs](https://github.com/thehale/BinaryClock/issues/new/choose).
- Developing new features/bug fixes.

The rest of this document will focus on that last bullet point, providing a
guide to setting up your development environment so you can bring your ideas for
`BinaryClock` to life.

## Development Setup

Start by following the [React Native CLI
Quickstart](https://reactnative.dev/docs/environment-setup) from the official
docs.

Then install `fastlane`: https://fastlane.tools/

Then fork and clone this repository to your machine.

Then copy `fastlane/.env.dist` to `fastlane/.env`

From there you can start experimenting with making any changes you like!

## Directory Structure

Nearly all development on Binary Clock occurs within the `src` folder. Here's
what each subfolder contains:

- `components`: Individual, reusable UI components for the clock and its
  settings page.
- `pages`: Complete screens for the app.
- `utils`: The backend logic for storing and retriving user settings from
  persistent storage.

## Common Commands

### Running the app

Dev Mode (e.g. Hot Reloading)
```shell
npm run android
npm run ios
```

Production Mode
```shell
npm run android:release
npm run ios:release
```

### Installing iOS native dependencies (Cocoapods)

```shell
npm run pods
```

### Updating Branding

**App Icon**
1. Update `icon.svg`
2. `npm run icons`

**Splash Screen**
1. Update `splash.svg`
2. `npm run splash`

### Deployments

Fill out all the credentials in `fastlane/.env` (make a copy of `fastlane/.env.dist`
if it doesn't exist yet).

**Building**

Builds are automatically run as part of a release command, but sometimes its nice to test a build in isolation.

```shell
fastlane android build
fastlane ios build
```

**Internal/Beta Release**
```shell
fastlane android internal
fastlane ios beta
```

**Production Release**
```shell
fastlane android production
fastlane ios production
```

See [`fastlane/README.md`](fastlane/README.md) for more details

## Submitting Contributions

After completing the installation steps above, make whatever bug fixes or
improvements you want in the codebase.

When you are done, simply commit your code with a brief message explaining what
was changed, and why. A series of automated checks will run to make sure
everything looks good before the commit gets saved:

- The unit test suite will automatically run and inform you of any failing tests
  that need fixing.
- Linters will automatically run and correct any code formatting problems. Make
  sure to `git add .` after these run to capture their changes.

Finally push up your changes to your fork and open a Pull Request (PR) back into
`thehale/BinaryClock`.

- A bot will post a link on your PR asking you to sign a standard Contributor
  License Agreement (CLA) giving me permission to integrate your contribution
  into the project.
- Any questions about your contribution will be discussed within the PR's
  comment section.
- After everything looks great, your PR will be merged into the `main` branch of
  `BinaryClock`!

## Credential Management in CI/CD

### `secrets.MATCH_GIT_BASIC_AUTHORIZATION`

This secret allows [Fastlane to clone the private
repository](https://docs.fastlane.tools/actions/match/#git-storage-on-github)
storing the iOS signing certificates and provisioning profiles.

Configuring the secret takes two steps:

1. Create a fine-grained personal access token with **read-only** permissions to
   **Content** (which will auto-imply read permissions on **Metadata**) to the
   private repository containing your signing certs and provisioning profiles. I
   recommend a 1 year token expiration.
2. Base64 encode your username and token into an authorization header, and set
   the resulting value as the GitHub Actions secret.
    - e.g. `echo -n your_github_username:your_personal_access_token | base64`

## Other Notes

### Common Error Messages / Solutions

`PIF Transfer` - Typically results from reinstalling Cocoapods (e.g. `npm run pods`) while XCode is still open. Close/quit XCode and reopen.

`errSecInternalComponent` - The MacOS keychain is locked. Typically occurs when SSHing into the Mac. Use `security unlock-keychain` to fix the issue.