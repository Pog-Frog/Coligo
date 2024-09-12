import {IsString, IsNotEmpty, MinLength, IsEmail, MaxLength, IsOptional} from "class-validator";
import {Announcement, Exam} from "@prisma/client";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsString()
    @IsOptional()
    exams: Exam[];

    @IsString()
    @IsOptional()
    announcements: Announcement[];
}

export class LoginUserDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}