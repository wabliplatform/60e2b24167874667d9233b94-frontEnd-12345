/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Doctor model module.
 * @module model/Doctor
 * @version 1.0.0
 */
class Doctor {
    /**
     * Constructs a new <code>Doctor</code>.
     * @alias module:model/Doctor
     * @param dName {String} 
     * @param dSpecial {String} 
     * @param dAge {Number} 
     * @param dGender {String} 
     * @param dLeave {String} 
     */
    constructor(dName, dSpecial, dAge, dGender, dLeave) { 
        
        Doctor.initialize(this, dName, dSpecial, dAge, dGender, dLeave);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dName, dSpecial, dAge, dGender, dLeave) { 
        obj['dName'] = dName;
        obj['dSpecial'] = dSpecial;
        obj['dAge'] = dAge;
        obj['dGender'] = dGender;
        obj['dLeave'] = dLeave;
    }

    /**
     * Constructs a <code>Doctor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Doctor} obj Optional instance to populate.
     * @return {module:model/Doctor} The populated <code>Doctor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Doctor();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('dName')) {
                obj['dName'] = ApiClient.convertToType(data['dName'], 'String');
            }
            if (data.hasOwnProperty('dSpecial')) {
                obj['dSpecial'] = ApiClient.convertToType(data['dSpecial'], 'String');
            }
            if (data.hasOwnProperty('dAge')) {
                obj['dAge'] = ApiClient.convertToType(data['dAge'], 'Number');
            }
            if (data.hasOwnProperty('dGender')) {
                obj['dGender'] = ApiClient.convertToType(data['dGender'], 'String');
            }
            if (data.hasOwnProperty('dLeave')) {
                obj['dLeave'] = ApiClient.convertToType(data['dLeave'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Doctor.prototype['_id'] = undefined;

/**
 * @member {String} dName
 */
Doctor.prototype['dName'] = undefined;

/**
 * @member {String} dSpecial
 */
Doctor.prototype['dSpecial'] = undefined;

/**
 * @member {Number} dAge
 */
Doctor.prototype['dAge'] = undefined;

/**
 * @member {String} dGender
 */
Doctor.prototype['dGender'] = undefined;

/**
 * @member {String} dLeave
 */
Doctor.prototype['dLeave'] = undefined;






export default Doctor;

