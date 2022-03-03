const Workers = require('../models/worker-model');

let getWorkers = async (req, res) => {
  await Workers.find()
    .then((result) => res.send(result))
    .catch((err) => res.status(404).send({ Message: "ERROR." }));
};

let getWorkerById = async (req, res) => {
  await Workers.findById({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((err) => res.status(404).send({ Message: err }));
};

let AddWorker = async (req, res) => {
  await Workers.create(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: err }));
};

let EditWorker = async (req, res) => {
  await Workers.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send({ Error: err }));
};

let DeleteWorker = async (req, res) => {
  await Workers.findByIdAndDelete({ _id: req.params.id })
    .then((removedWorker) => res.send({ HES_OUT: removedWorker }))
    .catch((err) => res.end({ Error: err }));
};

module.exports = {
  getWorkers,
  getWorkerById,
  AddWorker,
  EditWorker,
  DeleteWorker,
};
