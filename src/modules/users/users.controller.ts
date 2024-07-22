import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor (
        private readonly usersService : UsersService
    ) {}

    @Post('create')
    async create(
        @Body('') body : CreateUserDto
    ) {
        return await this.usersService.create(body);
    }

    @Get('all')
    async findAll() {
        return await this.usersService.findAll();
    }

    @Patch('update/:userId')
    async update(
        @Body('') body : UpdateUserDto,
        @Param('userId') userId : string
    ) {
        return await this.usersService.update(body, userId);
    }

    @Delete('delete/:userId')
    async delete(
        @Param('userId') userId : string,
    ) {
        return await this.usersService.delete(userId);
    }
}