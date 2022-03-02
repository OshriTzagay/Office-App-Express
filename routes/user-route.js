const express = require("express");
const userRouter = express.Router();
const { Register, Login, GetAll,GetUser,DeleteUserByName } = require("../controllers/user-ctrl");

userRouter.get("/",GetAll);
userRouter.get("/:id",GetUser);
userRouter.delete("/:name",DeleteUserByName)

userRouter.post("/register", Register);
userRouter.post("/login", Login);

module.exports = userRouter;
