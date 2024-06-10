import userRouter from "./modules/user/user.router.js"
import noteRouter from "./modules/note/note.router.js"
export const appRouter = (app,express)=>{
    app.use(express.json()); //doning parse on the somthing coming from body

    //user
    app.use("/user",userRouter) ;//tells your Express.js application to use a specific set of code (userRouter) whenever a request comes in with a URL that starts with "/user".

    //note
    app.use("/note",noteRouter);

}