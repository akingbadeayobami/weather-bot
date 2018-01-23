import dateformat from "dateformat"
import randomstring from "randomstring";

/**
 * @function dateFormat
 * @description Formats Input Date To Be More User Friendly
 */
const dateFormat = (date) => {

    return dateformat(date, "mmm dS, yyyy, h:MM TT");

};

/**
 * @function randomId
 * @description Formats Input Date To Be More User Friendly
 */
const randomId = () => {
    return randomstring.generate(12);
}

export {
    dateFormat,
    randomId
};