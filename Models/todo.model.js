import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
task:{
    type:String,
    require:true
}
})


const todo = mongoose.model('todo',taskSchema)
export default todo;