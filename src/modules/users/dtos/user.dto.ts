import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UserDto {

    @ApiProperty({
        description: 'Id de criação do usuario.',
        example: 'c6d52e80-037f-498f-b6e8-3ff4ee7a839a'
    })
    @IsString()
    id: string;

    @ApiProperty({
        description: 'Nando Moura',
        example: 'Nome do usuario'
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'email@email.com',
        example: 'Email do usuario'
    })
    @IsString()
    email: string;
}