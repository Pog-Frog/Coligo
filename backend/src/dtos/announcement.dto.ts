import {IsString, IsNotEmpty, IsOptional, IsBoolean} from 'class-validator';


export class CreateAnnouncementDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    author: string;

    @IsString()
    @IsOptional()
    subject: string;

    @IsString()
    @IsOptional()
    userId: string;
}

export class UpdateAnnouncementDto {
    @IsString()
    @IsOptional()
    author: string;

    @IsString()
    @IsOptional()
    subject: string;
}
