export const formatTime = (secs) => {
  let minutes = Math.floor(secs / 60);
  let seconds = secs - minutes * 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

export const formatName = (name) => {
  if (!name) return;
  name = name.replaceAll("&#039;", "'");
  name = name.replaceAll("&amp;", "&");
  return name.replaceAll("&quot;", '"');
};

export const formatNum = (num) => {
  return num ? num.toLocaleString() : null;
};

export const checkInLocalData = (id, name) => {
  const localData = JSON.parse(localStorage.getItem(name));
  const result = localData?.find((item) => item.id === id);
  return result ? true : false;
};

export const removeItem = (id, name) => {
  const localData = JSON.parse(localStorage.getItem(name));
  const result = localData?.filter((item) => item.id !== id);
  localStorage.setItem(name, JSON.stringify(result));
  return result;
};
