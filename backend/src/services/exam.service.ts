import {Service} from 'typedi';
import {HttpException} from '../exceptions/http.exception';
import prisma from '../libs/prismadb';
import Exam from '../interfaces/exam.interface';
import {User} from "../interfaces/user.interface";


@Service()
export class ExamService {
    public async createExam(examData: Exam): Promise<Exam> {
        let findUser: User;
        try {
            findUser = await prisma.user.findFirst({where: {id: examData.userId}});
        } catch (error) {
            throw new HttpException(404, "User not found");
        }
    
        let createdExam: Exam;
        try {
            createdExam = await prisma.exam.create({
                data: {
                    title: examData.title,
                    course: examData.course,
                    topic: examData.topic,
                    due: examData.due,
                    userId: examData.userId
                }
            });
        } catch (error) {
            throw new HttpException(500, "Exam not created");
        }
    
        try {
            await prisma.user.update({
                where: {id: examData.userId},
                data: {
                    exams: {
                        connect: {
                            id: createdExam._id
                        }
                    }
                }
            });
        } catch (error) {
            throw new HttpException(500, "Failed to update user");
        }
    
        return createdExam;
    }
    

    public async updateExam(examId: string, examData: Exam, userId: string): Promise<Exam> {
        let findExam: Exam;
        try {
            findExam = await prisma.exam.findFirst({where: {id: examId}});
        } catch (error) {
            throw new HttpException(404, "Exam not found");
        }
    
        if (findExam.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        let updatedExam: Exam;
        try {
            updatedExam = await prisma.exam.update({
                where: {id: examId},
                data: {
                    title: examData.title,
                    course: examData.course,
                    topic: examData.topic,
                    due: examData.due,
                    userId: examData.userId
                }
            });
        } catch (error) {
            throw new HttpException(500, "Exam not updated");
        }
    
        return updatedExam;
    }
    

    public async deleteExam(examId: string, userId: string): Promise<string> {
        let findExam: Exam;
        try {
            findExam = await prisma.exam.findFirst({where: {id: examId}});
        } catch (error) {
            throw new HttpException(404, "Exam not found");
        }
    
        if (findExam.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        let deletedExam: Exam;
        try {
            deletedExam = await prisma.exam.delete({
                where: {id: examId}
            });
        } catch (error) {
            throw new HttpException(500, "Exam not deleted");
        }
    
        return "Exam deleted";
    }
    

    public async getCategories(userId: string): Promise<Exam[]> {
        let findUser: User;
        try {
            findUser = await prisma.user.findFirst({where: {id: userId}});
        } catch (error) {
            throw new HttpException(404, "User not found");
        }
    
        let categories: Exam[];
        try {
            categories = await prisma.exam.findMany({where: {userId: userId}});
        } catch (error) {
            throw new HttpException(500, "Failed to retrieve categories");
        }
    
        return categories;
    }

    public async getExam(examId: string, userId: string): Promise<Exam> {
        let findExam: Exam;
        try {
            findExam = await prisma.exam.findFirst({
                where: {id: examId}
            });
        } catch (error) {
            throw new HttpException(404, "Exam not found");
        }
    
        if (findExam.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        return findExam;
    }
}
