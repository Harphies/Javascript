"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const plansController_1 = require("../controllers/plansController");
router.post('plan/create', plansController_1.createPlan);
router.get('/plans/all', plansController_1.getAllPLans);
exports.default = router;
//# sourceMappingURL=indexRoute.js.map