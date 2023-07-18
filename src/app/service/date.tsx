import dayjs, {ManipulateType} from "dayjs";

type formatDateType = {
 value: string;
 format: string
};

type addDateType = {
 value: string;
 addValue: number;
 unit: ManipulateType|undefined;
 format: string
};


const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

const formatDate = ({value, format} : formatDateType) => {
    return dayjs(value).format(format)
}

const addDate = ({value, addValue, unit, format}: addDateType) =>  {
    return dayjs(value).add(addValue, unit).format(format)
}

export {
    dayjs,
    formatDate,
    addDate
};
