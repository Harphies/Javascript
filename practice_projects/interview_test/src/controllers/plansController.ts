import plans from '../model/SubscriptionPlans'
import {Plans} from '../interface/Plan'

export const getAllPlans = async (_:any, res:any) => {
    plans.find((err: any, result: any) => {
        if(err) {
            res.status(400).send("Error")
        } else {
            console.log(JSON.stringify(result))
            res.status(200).json({result})
        }
    })
}

export const createPlan = async (req: any, res: any) => {
    const request: Plans = req.body
    let plan = new plans(request)
    plan.save((err:any, result:any) => {
        if(err) {
            res.send("Error")
        } else {
            console.log(JSON.stringify(result))
            res.status(200).send(result)
        }
    })
}