import { IsString, IsNumber, IsOptional, IsUUID, isString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateContactDto{
 
    @ApiProperty({
        description: 'Fullname of the contact',
        example: 'Gustavo'  
    })
    @IsString()
    fullname:string;

   
    @ApiProperty({
        description:'Phone of the contact',
        example:'+573136356885'
    })
    @IsString()
    @IsOptional()
    phone:string;

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'Email of the contact',
        example:'example@gmail.com'
    })
    email:string;

   
    @ApiProperty({
        description: 'Image URL of the contact',
        example: 'https://example.com/images/property.jpg',
    })
    @IsString()
    @IsOptional()
    image_url: string;

   
    @ApiProperty({
        description: 'Latitude of the contact location ',
        example:'6.2353087'
    })
    @IsString()
    @IsOptional()
    latitude:string;

    
    @ApiProperty({
        description: 'Longitude of the contact location ',
        example:'-75.5438637'
    })
    @IsString()
    @IsOptional()
    longitude:string

}