import {Exam} from "@prisma/client";
import {Announcement} from "@prisma/client";

;

export interface User {
    id?: string;
    email: string;
    password?: string;
    name: string;
    exams?: Exam[];
    announcements?: Announcement[];

    toJSON?(): any;
}
