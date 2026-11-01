import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PagePipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata) {
        const page = Number(value) // transform

        if (page < 0) {
            throw new BadRequestException("page number should be greater than 0")
        }

        return page
    }
}
