import {createNote,userNote,allNotes,updateNote} from "./note.controller.js"
import { Router } from "express";
const router = Router();

//create note
router.post("/",createNote);

//update
router.patch("/:id",updateNote)

//all notes
router.get("/",allNotes);

//user notes
router.get("/user/:id",userNote);
export default router;