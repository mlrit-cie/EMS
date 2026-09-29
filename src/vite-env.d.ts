// Vite CSS ?url import type declaration
declare module '*.css?url' {
  const url: string;
  export default url;
}
