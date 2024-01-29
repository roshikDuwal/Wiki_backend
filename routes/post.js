import express from "express"
import { addPost, getPost,deletePost,singlePost,updatePost,likePost } from "../controller/post.js"

const router = express.Router()

router.get("/",getPost)
router.post("/addpost",addPost)
router.delete("/:id",deletePost)
router.get("/:id",singlePost)
router.put("/edit/:id",updatePost)
router.post("/like/:id",likePost)

export default router