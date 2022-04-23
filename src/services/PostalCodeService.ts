import { PostalCodeResponse } from '../dto/PostalCodeDTO'
import ZippopotamProvider from '../providers/ZippopotamProvider'
import ZippopotamPostalCodeAdapter from '../utils/adapters/ZippopotamPostalCodeAdapter'

export class PostalCodeService {
  async get(
    countryCode: string,
    postalCode: string
  ): Promise<PostalCodeResponse> {
    const zPostCode = await ZippopotamProvider.get(countryCode, postalCode)
    return ZippopotamPostalCodeAdapter.toPostalCode(zPostCode)
  }
}
