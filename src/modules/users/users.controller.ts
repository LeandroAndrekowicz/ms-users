import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Controller('users')
export class UsersController {
    constructor (
        private readonly usersService : UsersService
    ) {}

    @Post('create')
    create(
        @Body('') body : CreateUserDto
    ) {
        return this.usersService.create(body);
    }

    @Get('all')
    findAll() {
        return this.usersService.findAll();
    }

    @Patch('update/:userId')
    update(
        @Body('') body : UpdateUserDto,
        @Param('userId') userId : string
    ) {
        return this.usersService.update(body, userId);
    }

    @Delete('delete/:userId')
    delete(
        @Param('userId') userId : string,
    ) {
        return this.usersService.delete(userId);
    }
}