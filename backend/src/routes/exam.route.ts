import {Router} from "express";
import {ExamController} from "../controllers/exam.controller";
import {authMiddleware} from "../middlewares/auth.middleware";
import {validationMiddleware} from "../middlewares/validation.middleware";
import {CreateExamDtO, UpdateExamDtO} from "../dtos/exam.dto";
import {Route} from "../interfaces/route.interface";


export class ExamRoute implements Route {
    public path = "/api/exams";
    public router = Router();
    public examController = new ExamController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateExamDtO), this.examController.createExam);
        this.router.put(`${this.path}/:examId`, authMiddleware, validationMiddleware(UpdateExamDtO), this.examController.updateExam);
        this.router.delete(`${this.path}/:examId`, authMiddleware, this.examController.deleteExam);
        this.router.get(`${this.path}`, authMiddleware, this.examController.getExam);
        this.router.get(`${this.path}/:examId`, authMiddleware, this.examController.getExam);
    }
}