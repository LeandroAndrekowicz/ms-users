import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserDto } from "../dtos/user.dto";
import { randomUUID } from "node:crypto";

@Injectable()
export class UsersRepository {
    private users : UserDto[] = []
    
    create(user : CreateUserDto) {
        const formatUser = {
            id: randomUUID(),
            email: user.email,
            name: user.name
        }

        this.users.push(formatUser);

        return formatUser;
    }

    findAll() {
        return this.users;
    }

    updateById(user: UpdateUserDto, userId : string) {
        const foundUser = this.users.find(user => user.id === userId);

        for (let key in user) {
            foundUser[key] = user[key]
        }

        return foundUser;
    }

    delete(userId: string) {
        const index = this.users.findIndex((user) => user.id === userId);

        this.users.splice(index, 1);

        return 'Usuario deletado com sucesso!';
    }
}