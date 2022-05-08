export const getAllMessage = (page) => {
  return fetch(`/api/message/10/${page ? page : 1}`)
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
