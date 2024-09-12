import {Router} from "express";
import {AnnouncementController} from "../controllers/announcement.controller";
import {authMiddleware} from "../middlewares/auth.middleware";
import {validationMiddleware} from "../middlewares/validation.middleware";
import {CreateAnnouncementDto, UpdateAnnouncementDto} from "../dtos/announcement.dto";
import {Route} from "../interfaces/route.interface";


export class AnnouncementRoute implements Route {
    public path = "/api/announcements";
    public router = Router();
    public announcementController = new AnnouncementController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreateAnnouncementDto), this.announcementController.createAnnouncement);
        this.router.put(`${this.path}/:announcementId`, authMiddleware, validationMiddleware(UpdateAnnouncementDto), this.announcementController.updateAnnouncement);
        this.router.delete(`${this.path}/:announcementId`, authMiddleware, this.announcementController.deleteAnnouncement);
        this.router.get(`${this.path}`, this.announcementController.getAnnouncements);
        this.router.get(`${this.path}/:announcementId`, this.announcementController.getAnnouncement);
    }
}