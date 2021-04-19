import express from 'express'

const authorizedRoute = express.Router()

import * as Plans from '../controllers/plansController'


authorizedRoute.post('/plans/create', Plans.createPlan)
authorizedRoute.get('/plans/all', Plans.getAllPlans)

export default authorizedRoute