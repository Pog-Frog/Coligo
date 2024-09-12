import {Service} from 'typedi';
import {HttpException} from '../exceptions/http.exception';
import prisma from '../libs/prismadb';
import Announcement from '../interfaces/announcement.interface';
import {User} from "../interfaces/user.interface";


@Service()
export class AnnouncementService {
    public async createAnnouncement(announcementData: Announcement): Promise<Announcement> {
        let findUser: User;
        try {
            findUser = await prisma.user.findFirst({where: {id: announcementData.userId}});
        } catch (error) {
            throw new HttpException(404, "User not found");
        }
    
        let createdAnnouncement: Announcement;
        try {
            createdAnnouncement = await prisma.announcement.create({
                data: {
                    title: announcementData.title,
                    author: announcementData.author,
                    subject: announcementData.subject,
                    userId: announcementData.userId
                }
            });
        } catch (error) {
            throw new HttpException(500, "Announcement not created");
        }
    
        try {
            await prisma.user.update({
                where: {id: announcementData.userId},
                data: {
                    announcements: {
                        connect: {
                            id: createdAnnouncement._id
                        }
                    }
                }
            });
        } catch (error) {
            throw new HttpException(500, "Failed to update user");
        }
    
        return createdAnnouncement;
    }
    

    public async updateAnnouncement(announcementId: string, announcementData: Announcement, userId: string): Promise<Announcement> {
        let findAnnouncement: Announcement;
        try {
            findAnnouncement = await prisma.announcement.findFirst({where: {id: announcementId}});
        } catch (error) {
            throw new HttpException(404, "Announcement not found");
        }
    
        if (findAnnouncement.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        let updatedAnnouncement: Announcement;
        try {
            updatedAnnouncement = await prisma.announcement.update({
                where: {id: announcementId},
                data: {
                    title: announcementData.title,
                    author: announcementData.author,
                    subject: announcementData.subject,
                    userId: announcementData.userId
                }
            });
        } catch (error) {
            throw new HttpException(500, "Announcement not updated");
        }
    
        return updatedAnnouncement;
    }
    

    public async deleteAnnouncement(announcementId: string, userId: string): Promise<string> {
        let findAnnouncement: Announcement;
        try {
            findAnnouncement = await prisma.announcement.findFirst({where: {id: announcementId}});
        } catch (error) {
            throw new HttpException(404, "Announcement not found");
        }
    
        if (findAnnouncement.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        let deletedAnnouncement: Announcement;
        try {
            deletedAnnouncement = await prisma.announcement.delete({
                where: {id: announcementId}
            });
        } catch (error) {
            throw new HttpException(500, "Announcement not deleted");
        }
    
        return "Announcement deleted";
    }
    

    public async getAnnouncements(userId: string): Promise<Announcement[]> {
        let findUser: User;
        try {
            findUser = await prisma.user.findFirst({where: {id: userId}});
        } catch (error) {
            throw new HttpException(404, "User not found");
        }
    
        let categories: Announcement[];
        try {
            categories = await prisma.announcement.findMany({where: {userId: userId}});
        } catch (error) {
            throw new HttpException(500, "Failed to retrieve categories");
        }
    
        return categories;
    }

    public async getAnnouncement(announcementId: string, userId: string): Promise<Announcement> {
        let findAnnouncement: Announcement;
        try {
            findAnnouncement = await prisma.announcement.findFirst({
                where: {id: announcementId}
            });
        } catch (error) {
            throw new HttpException(404, "Announcement not found");
        }
    
        if (findAnnouncement.userId.toString() !== userId) {
            throw new HttpException(401, "Unauthorized");
        }
    
        return findAnnouncement;
    }
}
