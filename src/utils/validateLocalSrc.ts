export const validateLocalSrc = (path: string, localPath: string) => {
  return path.includes('http') ? path : localPath;
};
