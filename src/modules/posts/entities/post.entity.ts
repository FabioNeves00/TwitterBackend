import { User } from "src/modules/users/entities/user.entity";
import { Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  author: User

  @Column({ type: 'varchar', length: 255 })
  content: string

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date
}
