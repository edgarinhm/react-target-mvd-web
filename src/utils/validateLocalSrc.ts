export const validateLocalSrc = (path: string, localPath: string) => {
  return path && path.includes('http') ? path : localPath;
};
