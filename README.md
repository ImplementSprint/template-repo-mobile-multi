# Mobile Boilerplate (Multi Stack)

This repository combines:

- Expo + TypeScript app at repository root (`.`)
- Native Kotlin Android app in `kotlin/`

Use this as `template-repo-mobile-multi`.

## Commands

Expo (root):

- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run verify`

Kotlin (`kotlin/`):

- `npm run kotlin:assembleDebug`
- `npm run kotlin:assembleRelease`
- `npm run kotlin:test`
- `npm run kotlin:lint`

## CI/CD

Caller workflow:

- `.github/workflows/mobile-pipeline-caller.yml`

Central workflow ref:

- `ImplementSprint/central-workflow/.github/workflows/master-pipeline-mobile.yml@maestro`

Required variable:

- `MOBILE_MULTI_SYSTEMS_JSON`

Use this exact value:

```json
[
  {
    "name": "mobile-expo",
    "dir": ".",
    "mobile_stack": "expo",
    "node_version": 20,
    "java_version": "17",
    "enable_android_build": true,
    "enable_ios_build": true,
    "version_stream": "mobile-expo"
  },
  {
    "name": "mobile-kotlin",
    "dir": "kotlin",
    "mobile_stack": "kotlin",
    "java_version": "17",
    "gradle_task": "assembleRelease bundleRelease",
    "enable_android_build": true,
    "enable_ios_build": false,
    "version_stream": "mobile-kotlin"
  }
]
```

## Important Run Behavior

- Expo builds Android (`.apk`) and iOS simulator app (`.app`) when enabled above.
- Kotlin builds Android artifacts (no iOS `.app` for Kotlin lane).
- Maestro E2E is enabled by default; `.maestro/smoke.yaml` is included for baseline validation.
- Use **new runs** (`push` or `Run workflow`) for full execution.
- `Re-run all jobs` can replay prior context and may skip active-system lanes.
