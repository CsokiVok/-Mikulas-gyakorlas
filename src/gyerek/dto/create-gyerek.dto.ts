import { IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateGyerekDto {
  @IsString()
  @IsNotEmpty()
  @Length(3,50)
  nev: string;

  @IsString()
  @IsNotEmpty()
  lakcim: string;

  @IsBoolean()
  joVolt:boolean;

  @IsOptional()
  @IsString()
  @Length(3,100)
  kertJatek?: string
}
