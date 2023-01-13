import { IsEmail, IsString, Matches, matches, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {

    @IsString()
    @IsEmail()
    email:string;


    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(  /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    {message:'The password must have a Uppercase, lowercase letter and a number'})
    password:string;


    @IsString()
    @MinLength(1)
    fullname:string;

}
