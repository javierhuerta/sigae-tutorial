import { IsString, IsNumber, IsBoolean, IsOptional, Min, Max } from 'class-validator';

export class CatInputDto {
    @IsOptional()
    @IsString()
    query?: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(30)
    age?: number;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}