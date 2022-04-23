import { Resolver, Arg, Query } from 'type-graphql'
import {
  PostalCodeResponse,
  PostalCodeSearchParametersInput,
} from '../dto/PostalCodeDTO'
import { PostalCodeService } from '../services/PostalCodeService'

@Resolver()
export class PostalCodeResolver {
  private postalCodeService: PostalCodeService = new PostalCodeService()

  @Query(() => PostalCodeResponse)
  async getPostalCodeInfo(
    @Arg('parameters') parameters: PostalCodeSearchParametersInput
  ): Promise<PostalCodeResponse> {
    console.info('getPostalCodeInfo', parameters)
    return await this.postalCodeService.get(
      parameters.countryCode,
      parameters.postalCode
    )
  }
}
