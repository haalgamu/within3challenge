import { InputType, ObjectType, Field } from 'type-graphql'
import { Length, IsAlpha } from 'class-validator'

@InputType()
export class PostalCodeSearchParametersInput {
  @Field()
  @Length(5)
  postalCode: string

  @Field()
  @Length(2, 2)
  @IsAlpha()
  countryCode: string
}

@ObjectType()
class PlacesResponse {
  @Field({ nullable: true })
  placeName: string

  @Field({ nullable: true })
  longitude: string
  @Field({ nullable: true })
  latitude: string

  @Field({ nullable: true })
  state: string
  @Field({ nullable: true })
  stateAbbreviation: string
}

@ObjectType()
export class PostalCodeResponse {
  @Field({ nullable: true })
  postalCode: string

  @Field({ nullable: true })
  country: string

  @Field({ nullable: true })
  countryAbbreviation: string

  @Field(() => [PlacesResponse])
  places: PlacesResponse[]
}
