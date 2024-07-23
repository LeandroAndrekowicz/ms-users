import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'Recebe o email do usuario',
        example: 'email@email.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Recebe o nome do usuario',
        example: 'Leandro Andrekowicz'
    })
    @IsNotEmpty()
    @IsString()
    name: string;
}