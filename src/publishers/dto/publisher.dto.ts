import {IsNotEmpty, IsString} from "class-validator";

export class PublisherDto {
  @IsNotEmpty()
  @IsString()
  public name: string
}