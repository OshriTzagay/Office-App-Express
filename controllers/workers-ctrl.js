let getWorkers = (req, res) => {
  res.send({ TYPE: "GET-ALL-WORKERS-v" });
};

let getWorkerById = (req, res) => {
  res.send({ TYPE: "GET-WORKER-BYid-v" });
};

let AddWorker = (req, res) => {
  res.send({ TYPE: "ADD WORKER-v" });
};

let EditWorker = (req, res) => {
  res.send({ TYPE: "EDIT-WORKER-v" });
};

let DeleteWorker = (req, res) => {
  res.send({ TYPE: "DELETE-WORKER-v" });
};

module.exports = {
  getWorkers,
  getWorkerById,
  AddWorker,
  EditWorker,
  DeleteWorker,
};
