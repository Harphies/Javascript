import {Schema} from 'mongoose'
import mongoose from 'mongoose'

export const Plan = new Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: false},
    PlanCode: String,
    PlanName: String,
    MonthlyCost: String,
    AnualCost: String
})

const plans = mongoose.model("plans", Plan)
export default plans