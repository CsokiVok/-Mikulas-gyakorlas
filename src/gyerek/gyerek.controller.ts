import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GyerekService } from './gyerek.service';
import { CreateGyerekDto } from './dto/create-gyerek.dto';
import { UpdateGyerekDto } from './dto/update-gyerek.dto';
import { ApiBadRequestResponse, ApiResponse } from '@nestjs/swagger';
import { Gyerek } from './entities/gyerek.entity';

@Controller('gyerek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) { }

  /**
   * Gyermek hozzáadása az adatbázishoz
   * 
   * @param createGyerekDto Az új gyermek adatai
   * @returns A hozzáadott gyermek adatai
   */
  @Post()
  @ApiResponse({
    status: 201,
    description: 'A gyermek sikeresen hozzáadva az adatbázishoz',
    type: Gyerek,
    example: {
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'labda'
    }
  })
  @ApiBadRequestResponse({
    description: 'Érvényesítési hiba történt'
  })

  create(@Body() createGyerekDto: CreateGyerekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  /**
   * Az összes gyermek lekérdezése
   * 
   * @returns Az összes gyermek adatai
   */
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Az összes gyermek sikeresen lekérdezve',
    type: Gyerek,
    example: [{
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'labda'
    }, {
      id: 2,
      nev: 'Teszt Elek',
      lakcim: 'Pécs, Széchenyi tér 1.',
      joVolt: false,
      kertJatek: 'autó'
    }]
  })
  findAll() {
    return this.gyerekService.findAll();
  }

  /**
   * A jó gyerekek lekérdezése
   * @returns Az összes jó gyermek adatai
   */

  @Get('jo')
  @ApiResponse({
    status: 200,
    description: 'Az összes jó gyermek sikeresen lekérdezve',
    type: Gyerek,
    example: [{
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'labda'
    }, {
      id: 2,
      nev: 'Teszt Elek',
      lakcim: 'Pécs, Széchenyi tér 1.',
      joVolt: false,
      kertJatek: 'autó'
    }]
  })
  findGood() {
    return this.gyerekService.findGood();
  }

  /**
   * Egy gyerek lekérdezése
   * @param id A gyerek azonosítója
   * @returns Eggy gyerek adatai
   */
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'A gyerek sikeresen lekérdezve',
    type: Gyerek,
    example: {
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'labda'
    }
  })
  findOne(@Param('id') id: string) {
    return this.gyerekService.findOne(+id);
  }

  /**
   * Gyerek adatainak frissítése
   * @param id A gyerek azonosítója
   * @param updateGyerekDto A frissített adatok
   * @returns A frissített gyerek adatai
   */
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'A gyermek adatai sikeresen frissítve',
    type: Gyerek,
    example: {
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'társasjáték'
    }
  })
  @ApiBadRequestResponse({
    description: 'Érvényesítési hiba történt'
  })
  update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekDto) {
    return this.gyerekService.update(+id, updateGyerekDto);
  }

  /**
   * Gyerek törlése
   * @param id A gyerek azonosítója
   * @returns A törölt gyerek adatai
   */
  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'A gyermek sikeresen törlve az adatbázisból',
    type: Gyerek,
    example: {
      id: 1,
      nev: 'Kovács János',
      lakcim: 'Budapest, Kossuth Lajos utca 12.',
      joVolt: true,
      kertJatek: 'labda'
    }
  })
  remove(@Param('id') id: string) {
    return this.gyerekService.remove(+id);
  }
}
