import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UsersService {
    constructor (
        private readonly usersRepository : UsersRepository
    ) {}

    async findAll() {
        return await this.usersRepository.findAll();
    }

    async create(user : CreateUserDto) {
        return await this.usersRepository.create(user);
    }

    async update(user : UpdateUserDto, userId : string) {
        return await this.usersRepository.updateById(user, userId);
    }

    async delete(userId : string) {
        return await this.usersRepository.delete(userId);
    }
}