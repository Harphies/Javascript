"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.Plan = new mongoose_1.Schema({
    id: { type: mongoose_2.default.Schema.Types.ObjectId, required: false },
    PlanCode: String,
    PlanName: String,
    MonthlyCost: String,
    AnualCost: String
});
const plans = mongoose_2.default.model("plans", exports.Plan);
exports.default = plans;
//# sourceMappingURL=SubscriptionPlans.js.map