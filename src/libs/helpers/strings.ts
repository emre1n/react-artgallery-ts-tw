export const toPath = (path: string, obj: Record<string, string>) => {
  let _path = path;
  Object.keys(obj).forEach(key => {
    const indexOf = _path.indexOf(`:${key}`);

    if (indexOf > -1) {
      const keyLength = key.length + 1;
      const pathArr = _path.split('');
      pathArr.splice(indexOf, keyLength, obj[key]);
      _path = pathArr.join('');
    }
  });
  return _path;
};
