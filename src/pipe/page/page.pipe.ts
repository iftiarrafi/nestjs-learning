import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PagePipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {

        if (value === undefined || value === '' || value === null)  return 1

        const page = Number(value) // transform

        if (isNaN(Number(page)) || page < 1) {
            throw new BadRequestException("page number should be greater than 0")
        }

        return Number(page)
    }
}
