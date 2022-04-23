import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class ZippopotamProvider {
  private axiosObj: AxiosInstance

  constructor() {
    this.axiosObj = axios.create({
      baseURL: 'http://api.zippopotam.us',
      timeout: 1000,
    })
  }

  async get(countryCode: string, postalCode: string): Promise<any | null> {
    try {
      const response: AxiosResponse = await this.axiosObj.get(
        `${countryCode}/${postalCode}`
      )

      if (response.status != 200) {
        console.error('The request failed', response)
        throw new Error('The request failed')
      }
      return response.data
    } catch (error) {
      console.error((error as Error).message, error)
      throw error
    }
  }
}

export default new ZippopotamProvider()
