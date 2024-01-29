import { postMessage } from "../model/post.js"

export const getPost=async(req,res)=>{
    try {
        const post=await postMessage.find()

        res.status(200).json({
            success:true,
            post
        })

    } catch (error) {
        return res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

export const singlePost=async(req,res)=>{
    const {id}=req.params;
    try {
        const post = await postMessage.findById(id)
        if(!post) return res.status(200).json({
            success:false,
            message:"Cannot find the Post"
        })

        res.status(200).json({
            success:true,
            post
        })

    } catch (error) {
        return res.status(200).json({
            success:false,
            message:error.message
        })
    }
}

export const addPost=async(req,res)=>{
   
    try {
        const {title,message,selectedFile,tags,creator}=req.body

        await postMessage.create({
            title,
            message,
            selectedFile,
            tags ,
            creator
        })

        res.status(200).json({
            success:true,
            message:"Post Added Successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success:true,
            message:error.message
        })
    }
}

export const updatePost=async(req,res)=>{
    try {
        const {id}=req.params;

        const {title,message,creator,selectedFile,tags}=req.body

        const singlepost=await postMessage.findById(id)

        if(!singlepost) return res.status(200).json({
            success:false,
            message:"Cannot find the Post"
        })

        await postMessage.findByIdAndUpdate(id,{
            title,
            message,
            creator,
            selectedFile,
            tags   
        },{new:true})

        res.status(200).json({
            success:true,
            message:"update Successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

export const deletePost=async(req,res)=>{
    try {
        const {id}=req.params;

        const post = await postMessage.findById(id)

        if(!post) return res.status(200).json({
            success:false,
            message:"Cannot find the id"
        })

        await post.deleteOne()

        res.status(200).json({
            success:true,
            message:"Deleted successfully"
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

export const likePost=async(req,res)=>{
    try {
        const {id}=req.params

        const post=await postMessage.findById(id)

        if(!post) return res.status(200).json({
            success:false,
            message:"Cannot find the Post"
        })

        await postMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})

        res.status(200).json({
            success:true,
            message:"liked"
        })

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}