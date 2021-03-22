// dto는 프로그래머가 더 간결한 코드를 짤 수 있게 도와준다

import { IsNumber, IsOptional, IsString } from 'class-validator';

// 여기서는 데이터의 유효성을 검사한다
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
