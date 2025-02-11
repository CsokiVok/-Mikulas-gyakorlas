import { IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateGyerekDto {
  /**
   * A gyerek neve
   * 
   * @example "Kovács János"
   */
  @IsString()
  @IsNotEmpty()
  @Length(3,50)
  nev: string;

  /**
   * A gyerek lakcíme
   * 
   * @example "Budapest, Kossuth Lajos utca 12."
   */

  @IsString()
  @IsNotEmpty()
  lakcim: string;

  /**
   * A gyerek jó volt-e
   * 
   * @example true
   */

  @IsBoolean()
  joVolt:boolean;


  /**
   * A gyerek kért játéka
   * 
   * @example "labda"
   */

  @IsOptional()
  @IsString()
  @Length(3,100)
  kertJatek?: string
}
