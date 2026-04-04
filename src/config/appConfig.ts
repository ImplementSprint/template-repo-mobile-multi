export type RuntimeEnvironment = 'development' | 'staging' | 'production';

export type AppConfig = {
  appName: string;
  environment: RuntimeEnvironment;
  apiBaseUrl: string;
};

const allowedEnvironments = new Set<RuntimeEnvironment>([
  'development',
  'staging',
  'production',
]);

export function resolveEnvironment(value: string | undefined): RuntimeEnvironment {
  if (value && allowedEnvironments.has(value as RuntimeEnvironment)) {
    return value as RuntimeEnvironment;
  }

  return 'development';
}

function getExpoExtra(): Record<string, string | undefined> | undefined {
  // Never load Expo runtime modules during Jest tests
  if (process.env.JEST_WORKER_ID) {
    return undefined;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Constants = require('expo-constants').default;
    return Constants?.expoConfig?.extra as Record<string, string | undefined> | undefined;
  } catch {
    return undefined;
  }
}

export function getAppConfig(): AppConfig {
  const extra = getExpoExtra();
  const appName = extra?.appName ?? 'Template Repo Mobile Multi Test';
  const environment = resolveEnvironment(
    extra?.environment ?? process.env.EXPO_PUBLIC_APP_ENV
  );
  const apiBaseUrl =
    extra?.apiBaseUrl ??
    process.env.EXPO_PUBLIC_API_BASE_URL ??
    'https://api.example.com';

  return {
    appName,
    environment,
    apiBaseUrl,
  };
}
