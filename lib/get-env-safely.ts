export default function getEnvSafely(key: string): string | undefined {
  return process.env[key];
}
