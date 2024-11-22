import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
    create(createUserDto: CreateContactDto) {
        return 'This action adds a new user';
      }
    
      findAll() {
        return `This action returns all users`;
      }
    
      findOne(id: number) {
        return `This action returns a #${id} user`;
      }

      update(id: number, updateContactDto: UpdateContactDto) {
        return `This action updates a #${id} user`;
      }
    
      remove(id: number) {
        return `This action removes a #${id} user`;
      }

}
