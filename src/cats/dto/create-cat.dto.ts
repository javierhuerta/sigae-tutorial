import { IsString, IsNumber, IsBoolean, IsNotEmpty, Min, Max, MaxLength } from 'class-validator';

export class CreateCatDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    name: string;

    @IsNumber()
    @Min(0)
    @Max(30)
    age: number;

    @IsBoolean()
    isActive: boolean;
}
