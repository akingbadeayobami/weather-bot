import dateformat from "dateformat"
import randomstring from "randomstring";

const date_format = (date) => {

    return dateformat(date, "mmm dS, yyyy, h:MM TT");

};

const random_id = () => {
    return randomstring.generate(12);
}

export {
    date_format,
    random_id
};