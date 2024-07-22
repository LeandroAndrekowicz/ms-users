import { Module } from '@nestjs/common';
import { featureModules } from './modules/ìndex';

@Module({
  imports: [...featureModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
