import express from 'express'
import todo from '../Models/todo.model.js'

const router = express.Router()


// get all task
router.get('/', async(req,res)=>{
   try {
    const getTodoAll = await todo.find()
    res.status(200).send(getTodoAll)
   } catch (err) {
    console.log(err)
    res.status(500).json({sucess:false,error:'internal error'})
   }
})

//get task by id

router.get('/:id', async(req,res)=>{
    try {
    const taskid = req.params.id
     const findtask = await todo.findById({_id:taskid})
     res.send(findtask)
    } catch (err) {
     console.log(err)
     res.status(500).json({sucess:false,error:'internal error'})
    }
 })




//add task
router.post('/add', async (req,res)=>{
try {
    
    const data = req.body 
    const detail = await todo.create(data)
     res.status(201).json({
         sucess:true,
         detail
     })
 

} catch (err) {
    console.log(err)
    res.status(500).json({sucess:false,error:'internal error'})
}
})



router.put('/:id', async (req, res) => {
    const id = req.params.id;  // Get the task ID from route parameters
    const updatedtodo = req.body;  // Get the updated task data from the request body

    try {
        // Use findByIdAndUpdate to update the task with the provided data
        const response = await todo.findByIdAndUpdate(id, updatedtodo, {
            new: true,  // This option returns the updated document
            runValidators: true  // This option ensures validation is run on the update
        });

        // If no document is found with that id
        if (!response) {
            return res.status(404).json({ success: false, message: 'Task not found' });
        }

        // Send the updated task as the response
        res.status(200).json(response);
    } catch (err) {
        console.log(err);  // Log the error for debugging
        res.status(500).json({ success: false, error: 'Internal error' });
    }
});


router.delete('/:id', async (req,res)=>{
    const id = req.params.id
    try {

        const deletetask = await todo.findByIdAndDelete(id)
        if(!deletetask){
            return res.status(404).json({sucess:false,message:'task not found'})
        }
        res.status(200).json({message:"task deleted sucess fully"})
        
    } catch (error) {
        
    }

})







export default router;