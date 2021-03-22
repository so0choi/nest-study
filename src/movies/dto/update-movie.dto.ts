import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// 여기서는 데이터의 유효성을 검사한다
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
