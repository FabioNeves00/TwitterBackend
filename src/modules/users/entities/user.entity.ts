import { Post } from 'src/modules/posts/entities/post.entity';
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Post, (post) => post.author)
  posts: Post[];

  @Column({ type: 'varchar' })
  username: string;

  @Column({ unique: true, type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date
}
