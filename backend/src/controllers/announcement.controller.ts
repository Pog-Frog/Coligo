import {NextFunction, Response, Request} from "express";
import {Container} from "typedi";
import {RequestWithUser} from "../interfaces/auth.interface";
import {TokenUtils} from "../utils/token.util";
import {HttpException} from "../exceptions/http.exception";
import Announcement from "../interfaces/announcement.interface";
import {AnnouncementService} from "../services/announcement.service";


export class AnnouncementController {
    public announcementService = Container.get(AnnouncementService);

    public createAnnouncement = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const announcementData: Announcement = req.body;

            if (!announcementData.userId) {
                const userId = (await prisma.user.findFirst({select: {id: true}})).id || await TokenUtils.getUserIDFromToken(req);

                if (!userId) {
                    throw new HttpException(409, "Invalid token");
                }

                announcementData.userId = userId;
            }

            const createdAnnouncement: Announcement = await this.announcementService.createAnnouncement(announcementData);
            res.status(201).json({data: createdAnnouncement, message: "created"});

        } catch (error) {
            next(error);
        }
    }

    public updateAnnouncement = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const announcementData: Announcement = req.body;
            const userId = (await prisma.user.findFirst({select: {id: true}})).id || await TokenUtils.getUserIDFromToken(req);

            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const updatedAnnouncement: Announcement = await this.announcementService.updateAnnouncement(req.params.announcementId, announcementData, userId);
            res.status(200).json({data: updatedAnnouncement, message: "updated"});

        } catch (error) {
            next(error);
        }
    }

    public deleteAnnouncement = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const announcementId = req.params.announcementId;
            const userId = (await prisma.user.findFirst({select: {id: true}})).id || await TokenUtils.getUserIDFromToken(req);

            if (!announcementId) {
                throw new HttpException(409, "Announcement ID is required");
            }

            const deletedAnnouncement = await this.announcementService.deleteAnnouncement(announcementId, userId);
            res.status(200).json({data: deletedAnnouncement, message: "deleted"});

        } catch (error) {
            next(error);
        }
    }

    public getAnnouncements = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = (await prisma.user.findFirst({select: {id: true}})).id || await TokenUtils.getUserIDFromToken(req);
            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const categories = await this.announcementService.getAnnouncements(userId);
            res.status(200).json({data: categories, message: "fetched"});

        } catch (error) {
            next(error);
        }
    }

    public getAnnouncement = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userId = (await prisma.user.findFirst({select: {id: true}})).id || await TokenUtils.getUserIDFromToken(req);
            if (!userId) {
                throw new HttpException(409, "Invalid token");
            }

            const announcement = await this.announcementService.getAnnouncement(req.params.announcementId, userId);
            res.status(200).json({data: announcement, message: "fetched"});

        } catch (error) {
            next(error);
        }
    }
}