import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {

    // constructor(
    //     @InjectRepository(Contact)
    //     private readonly contactRepository:Repository<Contact>,
    // ){}


    // async create(createUserDto: CreateContactDto) {
        
    //     // try {
            
    //     //     const contact =await this.
    //     // } catch (error) {
            
    //     // }
    //   }
    
      findAll() {
        return `This action returns all contacts`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} contact`;
      }

      update(id: number, updateContactDto: UpdateContactDto) {
        return `This action updates a #${id} contact`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} contact`;
      }

}
