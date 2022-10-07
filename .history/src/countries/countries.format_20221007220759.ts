import Parser from '../common/parser';

export default class Formatter {
  static convertJsonToSoapRequest(jsonArguments: any) {
    const soapBody = Parser.parseJSONBodyToXML(jsonArguments);
    console.log('formatter.ts', { jsonArguments, soapBody });

    console.log(
      'formatter.ts... Formatting: Converting json request to soap request...',
    );

    return ` `.replace('\ufeff', '');
  }
}
