import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { InstructorModule } from './instructor/instructor.module';

@Module({
  imports: [QuestionModule, InstructorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
