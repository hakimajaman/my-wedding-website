export const getAllMessage = () => {
  return fetch(`/api/message`)
    .then((response) => response.json())
    .then((result) => result);
};

export const sendMessage = (name, message) => {
  return fetch(`/api/message`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, message: message }),
  })
    .then((response) => response.json())
    .then((result) => result);
};
