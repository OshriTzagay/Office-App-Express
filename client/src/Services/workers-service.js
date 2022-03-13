const BASIC_API =
  process.env.NODE_ENV === "production"
    ? "https://ivolunteer-app.herokuapp.com/"
    : "http://localhost:8000/";

export const getAllWorkers = () => {
  return fetch(`${BASIC_API}workers`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
