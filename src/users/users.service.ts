import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService, // доступ к базе данных
  ) {}

  /**
   * Создание пользователя
   * Важно: пароль никогда не хранится в открытом виде
   */
  async createUser(email: string, password: string) {
    // 1. Хешируем пароль перед сохранением
    const hashedPassword = await argon2.hash(password);

    // 2. Сохраняем пользователя в БД
	return this.prisma.user.create({
		data: {
			email,
			password: hashedPassword,
		},
		select: {
			id: true,
			email: true,
			createdAt: true,
		},
	});

  /**
   * Поиск пользователя по email
   * Используется для логина и проверки существования
   */
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}