import {IsString, IsNotEmpty, IsOptional} from 'class-validator';


export class CreateExamDtO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    course: string;

    @IsString()
    @IsOptional()
    userId: string;

    @IsString()
    @IsOptional()
    topic: string;

    @IsString()
    @IsOptional()
    due: string;
}

export class UpdateExamDtO {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    course: string;

    @IsString()
    @IsOptional()
    topic: string;

    @IsString()
    @IsOptional()
    due: string;
}

