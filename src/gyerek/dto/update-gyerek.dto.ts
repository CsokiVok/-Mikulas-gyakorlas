import { PartialType } from '@nestjs/swagger';
import { CreateGyerekDto } from './create-gyerek.dto';

export class UpdateGyerekDto extends PartialType(CreateGyerekDto) {}
