import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { iEvent } from './interfaces/event.interface';
import { editFileName, imageFileFilter } from '../lib/fileFunction';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  /* @Get(':id')
  findOne(@Param('id') id) {} */

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Post()
  @UseInterceptors(
    FilesInterceptor('medias', 5, {
      storage: diskStorage({
        destination: './media',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  create(@UploadedFiles() files: Array<any>, @Body() newEvent: CreateEventDto) {
    this.eventsService.create(newEvent, files).then(r => {
      return { status: 'Ok', r }
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updEvent: CreateEventDto) {
    return this.eventsService.udpdate(id, updEvent);
  }
}
