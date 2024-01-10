import { Module } from '@nestjs/common';
import { OgmService } from './ogm.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [OgmService],
})
export class OgmModule {}
