// import Formatter from './countries.format';
import axios from 'axios';
import Parser from '../common/parser';
import Formatter from './countries.format';

const url = `http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso`;

export default class Remote {
  static async countriesGetter() {
    try {
      const payload = { ListOfCountryNamesByName: {} };

      const headers = {
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          SOAPAction:
            'http://www.oorsprong.org/websamples.countryinfo/ListOfCountryNamesByName',
        },
      };

      const args = Formatter.convertJsonToSoapRequest(payload);
      console.log(`remote.ts... Extracting xml arguments, ${args}`);
      let remoteResponse = await axios.post(url, args, headers);
      console.log(`remote.ts... Remote response, ${remoteResponse.data}`);
      remoteResponse = JSON.parse(
        JSON.stringify(await Parser.convertXMLToJSON(remoteResponse.data)),
      );

      console.log('remote.ts', { remoteResponse });
      let result =
        remoteResponse['soap:Body']['m:ListOfCountryNamesByNameResponse'][
          'm:ListOfCountryNamesByNameResult'
        ]['m:tCountryCodeAndName'];
      result = result.map((item: string) => {
        return {
          name: item['m:sName'],
          code: item['m:sISOCode'],
        };
      });
      return { status: 'success', sta length: result.length, result };
    } catch (err) {
      throw new Error(
        `${err} <> Oops something went wrong. Please try again later ${JSON.stringify(
          err,
        )}`,
      );
    }
  }
}
