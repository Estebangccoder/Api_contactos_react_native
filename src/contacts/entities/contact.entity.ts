import {ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/auth/entities/user.entity";

@Entity('contact')
export class Contact{
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        description: 'Id of the contact',
        example: '123e4567-e89b-12d3-a456-426614174000'
    })
    id:string;

    @Column({type: 'varchar', length:255, nullable:false})
    @ApiProperty({
        description: 'Fullname of the contact',
        example: 'Gustavo'  
    })
    fullname:string;

    @Column({type: 'varchar', length:255, nullable:false})
    @ApiProperty({
        description:'Phone of the contact',
        example:'+573136356885'
    })
    phone:string;

    @Column({type: 'varchar', length:255, nullable:false})
    @ApiProperty({
        description: 'Email of the contact',
        example:'example@gmail.com'
    })
    email:string;

    @Column({ type: 'text', nullable:false})
    @ApiProperty({
        description: 'Image URL of the contact',
        example: 'https://example.com/images/property.jpg',
    })
    image_url: string;

    @Column({type:'varchar', length:255})
    @ApiProperty({
        description: 'Latitude of the contact location ',
        example:'6.2353087'
    })
    latitude:string;

    @Column({type:'varchar', length:255})
    @ApiProperty({
        description: 'Longitude of the contact location ',
        example:'-75.5438637'
    })
    longitude:string;

    @Column({ type: 'varchar', nullable: false })
    @ApiProperty({
        description: 'ID of the user',
        example: '324f0caf-2501-4fe0-a7be-216afb0c5dff',
    })
    user_id: string;

    @ApiHideProperty()
    @ManyToOne(() => User, (user) => user.contacts)
    @JoinColumn({ name: 'user_id' })
    userId: User;
}

