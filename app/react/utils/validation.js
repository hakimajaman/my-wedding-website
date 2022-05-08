export const sendValidation = () => {
  const countName = "send-message-count";
  const dateName = "send-message-date";

  const count = localStorage.getItem(countName);
  const date = localStorage.getItem(dateName);
  const threeHours = 180 * 60 * 1000;
  const dateNow = new Date().getTime();

  if (Number(count) < 4 && date && dateNow - Number(date) > threeHours) {
    localStorage.setItem(countName, "1");
    localStorage.setItem(dateName, `${new Date().getTime()}`);
    return true;
  }

  if (Number(count) > 4 && date && dateNow - Number(date) < threeHours) {
    return false;
  }

  if (Number(count) > 4) {
    localStorage.setItem(countName, "1");
    localStorage.setItem(dateName, `${new Date().getTime()}`);
    return true;
  }

  localStorage.setItem(countName, `${!count ? "1" : Number(count) + 1}`);
  localStorage.setItem(dateName, `${new Date().getTime()}`);
  return true;
};
