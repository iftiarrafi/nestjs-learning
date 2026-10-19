import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AgePipe implements PipeTransform {
  transform(value : string, metadata: ArgumentMetadata) {
    // user's age should be greater than 18   // transforming + validation
    const age = Number(value) // transform

    if(Number.isNaN(age)){
      throw new BadRequestException("Age Must be a Valid Number")  //validation
    }

    if(age < 18){
      throw new BadRequestException("Age must be 18 or above") //validation
    }

    return age
  }
}
