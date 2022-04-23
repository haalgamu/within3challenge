import { PostalCodeResponse } from '../../dto/PostalCodeDTO'

class ZippopotamPostalCodeAdapter {
  public toPostalCode(zippopotamPostalCode: any): PostalCodeResponse {
    const data: PostalCodeResponse = new PostalCodeResponse()

    data.postalCode = zippopotamPostalCode['post code']
    data.country = zippopotamPostalCode['country']
    data.countryAbbreviation = zippopotamPostalCode['country abbreviation']
    data.places = []

    if (Array.isArray(zippopotamPostalCode.places)) {
      for (const place of zippopotamPostalCode.places) {
        data.places.push({
          placeName: place['place name'],
          longitude: place['longitude'],
          state: place['state'],
          stateAbbreviation: place['state abbreviation'],
          latitude: place['latitude'],
        })
      }
    }

    return data
  }
}

export default new ZippopotamPostalCodeAdapter()
