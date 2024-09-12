import {NextFunction, Response, Request} from "express";
import {Container} from "typedi";
import {RequestWithUser} from "../interfaces/auth.interface";
import {TokenUtils} from "../utils/token.util";
import {HttpException} from "../exceptions/http.exception";
import Exam from "../interfaces/exam.interface";
import { ExamService } from "../services/exam.service";


export class ExamController {
    public examService = Container.get(ExamService);

    public createExam = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const examData: Exam = req.body;

            if (!examData.userId) {
                const userId = await TokenUtils.getUserIDFromToken(req);

                if (!userId) {
                    throw new HttpException(409, "Invalid token");
                }

                examData.userId = userId;
            }

            const createdExam: Exam = await this.examService.createExam(examData);
            res.status(201).json({data: createdExam, message: "created"});

        } catch (error) {
            next(error);
        }
    }

    public updateExam = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const examData: Exam = req.body;
            const userId = await TokenUtils.getUserIDFromToken(req);

            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const updatedExam: Exam = await this.examService.updateExam(req.params.examId, examData, userId);
            res.status(200).json({data: updatedExam, message: "updated"});

        } catch (error) {
            next(error);
        }
    }

    public deleteExam = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const examId = req.params.examId;
            const userId = await TokenUtils.getUserIDFromToken(req);

            if (!examId) {
                throw new HttpException(409, "Exam ID is required");
            }

            const deletedExam = await this.examService.deleteExam(examId, userId);
            res.status(200).json({data: deletedExam, message: "deleted"});

        } catch (error) {
            next(error);
        }
    }

    public getExams = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = await TokenUtils.getUserIDFromToken(req);

            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const categories = await this.examService.getExams(userId);
            res.status(200).json({data: categories, message: "fetched"});

        } catch (error) {
            next(error);
        }
    }

    public getExam = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = await TokenUtils.getUserIDFromToken(req);

            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const exam = await this.examService.getExam(req.params.examId, userId);
            res.status(200).json({data: exam, message: "fetched"});

        } catch (error) {
            next(error);
        }
    }
}