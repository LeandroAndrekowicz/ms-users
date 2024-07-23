import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { ApiDocGenericPost } from "src/app/common/api-doc-post-generic.decorator";
import { ApiDocGenericGetAll } from "src/app/common/api-doc-generic-get-all.decorator";
import { UserDto } from "./dtos/user.dto";
import { ApiDocGenericPatch } from "src/app/common/api-doc-generic-patch.decorator";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor (
        private readonly usersService : UsersService
    ) {}

    @ApiDocGenericPost('user', CreateUserDto)
    @Post('create')
    async create(
        @Body('') body : CreateUserDto
    ) {
        return await this.usersService.create(body);
    }

    @ApiDocGenericGetAll('users', UserDto)
    @Get('all')
    async findAll() {
        return await this.usersService.findAll();
    }

    @ApiDocGenericPatch('user', UpdateUserDto)
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