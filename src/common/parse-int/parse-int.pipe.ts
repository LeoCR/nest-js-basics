import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntCustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const finalValue = parseInt(value, 10);
    if (isNaN(finalValue)) {
      throw new BadRequestException(`${value} its not a number.`);
    }
    return finalValue;
  }
}
