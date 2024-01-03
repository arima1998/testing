const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


router.get('/',async (req,res) =>{
    try {
        const posts=await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
        
    }
});
router.get('/specific',(req,res) =>{
    res.send("Specific POSTS BABY");
});

router.post('/' ,async (req,res)=>{ 
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        
    } catch (err) {
        res.json({message:err});
        
    }
} );

router.get('/:postId' , async (req,res) => {
   try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
   } catch (err) {
        res.json({message:err});
    
   }
});
router.delete('/:postId' , async (req,res) => {
    try {
         const removeedPost = await Post.findByIdAndDelete(req.params.postId);
         res.json(removeedPost);
    } catch (err) {
         res.json({message:err});
     
    }
 });



module.exports = router;