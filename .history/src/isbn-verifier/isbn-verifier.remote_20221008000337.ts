import Formatter from './isbn-verifier.format';
import axios from 'axios';
import Parser from '../common/parser';

const url = `http://webservices.daehosting.com/services/isbnservice.wso`;

export default class Remote {
  static async isbnVerifier(isbn: string) {
    try {
      const payload = {
        sISBN: isbn,
        // },
      };

      const headers = {
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
          SOAPAction: 'http://webservices.daehosting.com/ISBN/IsValidISBN13',
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
      return remoteResponse;
    } catch (err) {
      throw new Error(
        `${err} <> Oops something went wrong. Please try again later ${JSON.stringify(
          err,
        )}`,
      );
    }
  }
}
