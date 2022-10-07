// import Parser from '../common/parser';

export default class Formatter {
  static convertJsonToSoapRequest() {
    const soapBody = Parser.parseJSONBodyToXML(jsonArguments);
    // console.log('formatter.ts', { jsonArguments, soapBody });

    console.log(
      'formatter.ts... Formatting: Converting json request to soap request...',
    );

    return `<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
    </ListOfCountryNamesByName>
  </soap12:Body>
</soap12:Envelope> `.replace('\ufeff', '');
  }
}
