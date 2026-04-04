# Mobile Boilerplate (Multi Stack)

This repository combines:

- Expo + TypeScript mobile template at repository root
- Native Kotlin Android template inside `kotlin/`

Use this as the base for `template-repo-mobile-multi`.

## Stack

- Expo SDK 54 + React Native 0.81 (root app)
- TypeScript strict mode
- Jest + Detox for Expo app
- Native Kotlin Android + Gradle (Kotlin DSL) in `kotlin/`

## Structure

```text
.
|- src/
|- tests/
|- scripts/
|- kotlin/
|  |- app/
|  |- gradle/
|  |- build.gradle.kts
|  |- settings.gradle.kts
```

## Commands

Expo app (root):

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run test`
- `npm run lint`
- `npm run verify`

Kotlin app (`kotlin/`):

- `npm run kotlin:assembleDebug`
- `npm run kotlin:assembleRelease`
- `npm run kotlin:test`
- `npm run kotlin:lint`

## CI/CD

Workflow caller:

- `.github/workflows/mobile-pipeline-caller.yml`

Central workflow reference:

- `ImplementSprint/central-workflow/.github/workflows/master-pipeline-mobile.yml@maestro`

Required repository variable:

- `MOBILE_MULTI_SYSTEMS_JSON`

Recommended value:

```json
[
  {
    "name": "mobile-expo",
    "dir": ".",
    "mobile_stack": "expo",
    "enable_android_build": true,
    "enable_ios_build": true,
    "version_stream": "mobile-expo"
  },
  {
    "name": "mobile-kotlin",
    "dir": "kotlin",
    "mobile_stack": "kotlin",
    "gradle_task": "assembleRelease bundleRelease",
    "enable_android_build": true,
    "enable_ios_build": false,
    "version_stream": "mobile-kotlin"
  }
]
```
