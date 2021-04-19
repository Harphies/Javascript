"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlan = exports.getAllPlans = void 0;
const SubscriptionPlans_1 = __importDefault(require("../model/SubscriptionPlans"));
const getAllPlans = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    SubscriptionPlans_1.default.find((err, result) => {
        if (err) {
            res.status(400).send("Error");
        }
        else {
            console.log(JSON.stringify(result));
            res.status(200).json({ result });
        }
    });
});
exports.getAllPlans = getAllPlans;
const createPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.body;
    let plan = new SubscriptionPlans_1.default(request);
    plan.save((err, result) => {
        if (err) {
            res.send("Error");
        }
        else {
            console.log(JSON.stringify(result));
            res.status(200).send(result);
        }
    });
});
exports.createPlan = createPlan;
//# sourceMappingURL=plansController.js.map