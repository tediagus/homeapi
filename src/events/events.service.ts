import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as fs from 'fs';
import { resolve } from 'path';

import * as Events from '../data/events.json';
import { CreateEventDto } from './dto/create-event.dto';
import { iEvent } from './interfaces/event.interface';
import firebaseApp from '../plugin/firebase'
import { getFirestore, collection, getDocs, addDoc, Timestamp } from 'firebase/firestore/lite';


@Injectable()
export class EventsService {
  private readonly Events: iEvent[] = Events;
  private db;

  constructor() {
    this.db = getFirestore(firebaseApp);
  }


  /*   findOne() {} */

  async findAll() {

    const eventColl = collection(this.db, `/events`);
    const eventSnap = await getDocs(eventColl)
    const eventList = eventSnap.docs.map((doc) => doc.data() as iEvent)

    return eventList;
  }

  async create(eventData: CreateEventDto, files: Array<any> = []) {
    if (!eventData) {
      throw new BadRequestException();
    }

    if (files.length) {
      eventData.medias = [];
      files.forEach((f, i) => {
        eventData.medias.push({
          id: i + 1,
          type: f.mimetype,
          source: f.filename,
        });
      });
    }

    // add in data json file
    const currentDate = Timestamp.fromDate(new Date());

    eventData.dateCreated = currentDate;
    eventData.dateUpdated = currentDate;

    try {

      const docRef = await addDoc(collection(getFirestore(), 'events'), eventData)
      return docRef.id
    } catch (error) {
      console.error('Error writting new event to fireStore', error)
    }

    // save Image data
    // this.Events.push(eventData);

    // await fs.writeFileSync(
    //   resolve('src/data/events.json'),
    //   JSON.stringify(this.Events, null, 2),
    // );
  }

  async udpdate(id: string, eventData: iEvent) {
    // find data by ID
    const data = this.Events.find((e) => e.id === +id);

    if (!data) {
      return new NotFoundException('Event not found');
    }
    // update data
    if (eventData.title) {
      data.title = eventData.title;
    }

    if (eventData.description) {
      data.description = eventData.description;
    }

    if (eventData.comments) {
      data.comments = eventData.comments;
    }

    if (eventData.medias) {
      data.medias = eventData.medias;
    }

    data.dateUpdated = Timestamp.fromDate(new Date());

    await fs.writeFileSync(
      resolve('src/data/events.json'),
      JSON.stringify(this.Events, null, 2),
    );

    return { udpateEvent: 1 };
  }
}
