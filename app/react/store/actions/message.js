export const getAllMessage = () => {
  return fetch(`${process.env.BASE_URL}/message`)
    .then((response) => response.json())
    .then((result) => result);
};

export const sendMessage = (name, message) => {
  return fetch(`${process.env.BASE_URL}/message`, {
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
