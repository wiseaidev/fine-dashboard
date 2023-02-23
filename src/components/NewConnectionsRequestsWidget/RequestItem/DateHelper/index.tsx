import moment from "moment";

/**
 * Check if date is Tomorrow.
 * @param inputDateTime
 * @returns {boolean}
 */
const isTomorrow = (inputDateTime: string): boolean => {
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");

  return moment(inputDateTime).isSame(tomorrow, "day");
};

/**
 * Check if date is Yesterday.
 * @param inputDateTime
 * @returns {boolean}
 */
const isYesterday = (inputDateTime: string): boolean => {
  const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");

  return moment(inputDateTime).isSame(yesterday, "day");
};

/**
 * Check if date is Today.
 * @param date
 * @returns {boolean}
 */
const isToday = (date: string): boolean => {
  return moment().isSame(date, "day");
};

/**
 * Get Custom Date day.
 * @param date
 * @returns {string}
 */
const getDateText = (date: string): string => {
  if (isToday(date)) {
    return "Today";
  } else if (isYesterday(date)) {
    return "Yesterday";
  } else if (isTomorrow(date)) {
    return "Tomorrow";
  } else {
    return date;
  }
};

/**
 * Get Custom Date Time.
 * @param value
 * @param unit
 * @param format
 * @returns {string}
 */
const getCustomDateTime = (
  value: any,
  unit: string | number,
  format: string
): string => {
  if (!value) {
    return moment().format(format);
  } else {
    return moment().add(value, unit).format(format);
  }
};

// eslint-disable-next-line
export default { getCustomDateTime, getDateText };
