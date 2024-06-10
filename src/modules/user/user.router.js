//APIS
import { deleteAccount, login, signup,allUsers} from "./user.controller.js";
import { Router } from "express";
const router = Router(); // The Router object is used to define routes for handling HTTP requests (GET, POST, PUT, DELETE, etc.) in an Express application

//CRUD
//sign up
//there are two post methodes so we have to have two diff URL
router.post("/signup",signup);
//login
router.post("/login",login);

//delete
router.delete("/:email",deleteAccount);


//allusers   get deleted acc
router.get("/",allUsers);



export default router;