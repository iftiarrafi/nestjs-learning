import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class LimitPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value === undefined || value === null || value === '') return 2

        const limit = Number(value)

        if (isNaN(Number(limit)) || limit < 1){
            throw new BadRequestException("limit must be greater than 0")
        }

        return limit

    }
}