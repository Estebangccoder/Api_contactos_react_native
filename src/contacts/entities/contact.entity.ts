import {ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('contact')
export class contact{
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
    longitude:string
}

