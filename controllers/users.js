import User from "../models/User";

// READ
const getUser = async (req,res)=>{
    try {
       const {id}=req.params;
       const user=await User.findById(id);
       res.status(200).json(user) ;
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}