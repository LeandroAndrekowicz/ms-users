import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserDto } from "../dtos/user.dto";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/modules/global/prisma/prisma.service";

@Injectable()
export class UsersRepository {
    constructor (
        private readonly prismaService : PrismaService
    ) {}
    
    async create(user : CreateUserDto) {
        const formatUser = {
            email: user.email,
            name: user.name
        }

        const userCreated = await this.prismaService.users.create({
            data: formatUser
        })

        return {
            id: userCreated.id,
            ...formatUser
        };
    }

    async findAll() {
        return await this.prismaService.users.findMany();
    }

    async updateById(user: UpdateUserDto, userId : string) {
        const foundUser = await this.prismaService.users.update({
            where: {
                id: userId
            },
            data: user
        })

        return foundUser;
    }

    async delete(userId: string) {
        return await this.prismaService.users.delete({
            where: {id: userId}
        })
    }
}