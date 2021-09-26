import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule,
  ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','media'),
    exclude:['/events*']
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
