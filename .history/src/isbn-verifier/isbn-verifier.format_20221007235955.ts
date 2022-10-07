import Parser from '../common/parser';

export default class Formatter {
  static convertJsonToSoapRequest(jsonArguments: any) {
    const soapBody = Parser.parseJSONBodyToXML(jsonArguments);
    console.log('formatter.ts', { jsonArguments, soapBody });

    console.log(
      'formatter.ts... Formatting: Converting json request to soap request...',
    );

    const verifyFor13 = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <IsValidISBN13 xmlns="http://webservices.daehosting.com/ISBN">
      ${soapBody}
    </IsValidISBN13>
  </soap:Body>
</soap:Envelope> `;

    const verifyFor10 = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <IsValidISBN10 xmlns="http://webservices.daehosting.com/ISBN">
      ${soapBody}
    </IsValidISBN10>
  </soap:Body>
</soap:Envelope> `;

    if (jsonArguments.sISBN.length === 10) {
      return verifyFor10.replace('\ufeff', '');
    }
    return verifyFor13.replace('\ufeff', '');
  }
}
