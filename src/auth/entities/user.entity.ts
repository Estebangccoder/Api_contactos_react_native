import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Contact } from "src/contacts/entities/contact.entity";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        description: 'ID of the user',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    id: string;
    
    @Column({ type: 'varchar', length: 255 })
    @ApiProperty({
        description: 'Full name of the user',
        example: 'Prueba example',
    })
    fullName: string;

    @Column({ unique: true, nullable: false, type: 'varchar', length: 100 })
    @ApiProperty({
        description: 'Email address of the user',
        example: 'prueba@example.com',
    })
    email: string;

    @Column({ nullable: false, select:false, })
    @ApiProperty({
        description: 'Password of the user',
        example: 'clave123',
    })
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    @ApiProperty({
        description: 'Date when the user was created',
        example: '2024-09-15T12:00:00Z',
       })
      created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    @ApiProperty({
        description: 'Date when the user was last updated',
        example: '2024-09-15T12:00:00Z',
    })
    updated_at: Date;
    
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    @ApiProperty({
        description: 'Date when the user was deleted',
        example: '2024-09-15T12:00:00Z',
    })
    delete_at: Date;

    @ApiHideProperty()
    @OneToMany(() => Contact, (contact) => contact.userId, { onDelete: "CASCADE", cascade: true })
    contacts: Contact[];

    @BeforeInsert()
    checkFiledsBeforeInsert(){
        this.email=this.email.toLowerCase().trim();
    }

    @BeforeInsert()
    checkFieldsBeforeUpdate(){
        this.checkFiledsBeforeInsert();
    }
    

}
