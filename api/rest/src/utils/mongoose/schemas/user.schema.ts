import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Joi from 'joi';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CustomJoi = Joi.extend(require('joi-phone-number'));
const PhoneNumberSchema = CustomJoi.string().phoneNumber({
  defaultCountry: 'US',
});

@Schema()
export class User {
  @Prop({
    unique: true,
    required: true,
    validate: (value: string) => CustomJoi.assert(value, PhoneNumberSchema),
  })
  phoneNumber: string;

  @Prop({
    required: true,
  })
  hashedPassword: string;

  @Prop({
    default: new Date(),
  })
  createdAt: Date;

  @Prop({
    default: false,
  })
  isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document;
