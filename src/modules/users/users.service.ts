import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";

@Injectable()
export class UsersService {
    constructor (
        private readonly usersRepository : UsersRepository
    ) {}

    findAll() {
        return this.usersRepository.findAll();
    }

    create(user : CreateUserDto) {
        return this.usersRepository.create(user);
    }

    update(user : UpdateUserDto, userId : string) {
        return this.usersRepository.updateById(user, userId);
    }

    delete(userId : string) {
        return this.usersRepository.delete(userId);
    }
}