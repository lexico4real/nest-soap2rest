import Parser from '../common/parser';

export default class Formatter {
  static convertJsonToSoapRequest(jsonArguments: any) {
    const soapBody = Parser.parseJSONBodyToXML(jsonArguments);
    console.log('formatter.ts', { jsonArguments, soapBody });

    console.log(
      'formatter.ts... Formatting: Converting json request to soap request...',
    );

    return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://tempuri.org/">
  <soap:Header/>
  <soap:Body>
    ${soapBody}
  </soap:Body>
</soap:Envelope> `.replace('\ufeff', '');
  }
}
