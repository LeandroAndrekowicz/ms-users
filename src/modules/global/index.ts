import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./prisma/prisma.module";
import { PubSubExternalModule } from "./pubsub/pubsub.module";

export const globalModules = [PrismaModule, ConfigModule.forRoot(), PubSubExternalModule]