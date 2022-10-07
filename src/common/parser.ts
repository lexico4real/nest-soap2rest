import * as jsonxml from 'jsontoxml';
import * as xml2js from 'xml2js';
import { promisify } from 'util';

const parseString = xml2js.parseString;

const promisfiedParseString = promisify(parseString as any);

export default class Parser {
  static parseJSONBodyToXML(jsonArgument: any) {
    return jsonxml(jsonArgument, { html: true });
  }

  static async convertXMLToJSON(xmlMessage: xml2js.convertableToString) {
    const options = { trim: true, explicitArray: false, explicitRoot: false };
    const result = await promisfiedParseString(xmlMessage, options);
    console.log('parser.ts', { result });

    console.log('parser.ts... Parsing the xml supplied...');
    return result;
  }
}
