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
  let localData = JSON.parse(localStorage.getItem(name));
  const result = localData?.find((item) => item.id === id);
  return result ? true : false;
};

export const setupStorage = (item, name) => {
  let localData = JSON.parse(localStorage.getItem(name)) || [];
  const checkItem = localData.find((data) => data.id === item.id);
  if (checkItem) {
    localData = localData.filter((data) => data.id !== item.id);
  }
  let newData = [item, ...localData];
  if (newData.length > 24) {
    newData = newData.slice(0, 24);
  }
  localStorage.setItem(name, JSON.stringify(newData));
  return JSON.parse(localStorage.getItem(name));
};

export const removeItem = (id, name) => {
  const localData = JSON.parse(localStorage.getItem(name));
  const result = localData?.filter((item) => item.id !== id);
  localStorage.setItem(name, JSON.stringify(result));
  return result;
};

export const setUpHistory = (item) => {
  let localData = JSON.parse(localStorage.getItem("history")) || [];
  const checkItem = localData.find((song) => song.id === item.id);
  if (checkItem) {
    localData = localData.filter((song) => song.id !== item.id);
  }
  let newData = [item, ...localData];
  if (newData.length > 24) {
    newData = newData.slice(0, 24);
  }
  localStorage.setItem("history", JSON.stringify(newData));
  return JSON.parse(localStorage.getItem("history"));
};
