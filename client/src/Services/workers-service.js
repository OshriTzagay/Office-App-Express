const BASIC_API = "http://localhost:8000/";

export const getAllWorkers = () => {
  return fetch(`${BASIC_API}workers`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
