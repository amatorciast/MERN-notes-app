import express from "express";

const router = express.Router();


router.get("", (req, res) => {
    res.status(200).send("you got 20 notes")
});

router.post("", (req, res) => {
    res.status(201).json({message:"post created succesfully!"})
})

router.put("/:id", (req, res) => {
    res.status(200).json({message:"post updated succesfully!"})
})

router.delete("/:id", (req, res) => {
    res.status(201).json({message:"post deleted succesfully!"})
})

export default router;
