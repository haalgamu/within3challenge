const axiosGetRequestMock = jest.fn()

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: () => {
      return {
        get: axiosGetRequestMock,
      }
    },
  },
}))

import ZippopotamProvider from '../../../src/providers/ZippopotamProvider'

describe('ZippopotamProvider', () => {
  const postalCodeMockData = {
    'post code': '90210',
    country: 'United States',
    'country abbreviation': 'US',
    places: [
      {
        'place name': 'Beverly Hills',
        longitude: '-118.4065',
        state: 'California',
        'state abbreviation': 'CA',
        latitude: '34.0901',
      },
    ],
  }

  test('If the status of the response is different than 200 throw a error', async () => {
    axiosGetRequestMock.mockResolvedValueOnce({
      status: 400,
    })
    try {
      await ZippopotamProvider.get('countryCode', 'postalCode')
    } catch (error) {
      expect(axiosGetRequestMock).toBeCalled()
      expect((error as Error).message).toBe('The request failed')
    }
  })
  test('If the request fails then throw that error', async () => {
    const errorMessage = 'Any error'
    axiosGetRequestMock.mockRejectedValueOnce(new Error(errorMessage))
    try {
      await ZippopotamProvider.get('countryCode', 'postalCode')
    } catch (error) {
      expect(axiosGetRequestMock).toBeCalled()
      expect((error as Error).message).toBe(errorMessage)
    }
  })
  test('If the request was successful then return the postal code information', async () => {
    axiosGetRequestMock.mockResolvedValueOnce({ status: 200, data: postalCodeMockData })
    const response = await ZippopotamProvider.get('us', '90210')
    expect(response).toStrictEqual(postalCodeMockData)
  })
})
