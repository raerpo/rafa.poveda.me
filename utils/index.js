import { format, parseISO, differenceInMonths } from 'date-fns';

export const formatDate = date => {
  return format(parseISO(`${date}T00:00:00`), 'MMM yyyy');
};

export const formatDateDifference = (startDateStr, endDateStr) => {
  const startDate = parseISO(startDateStr);
  const endDate = parseISO(endDateStr);

  const totalMonths = differenceInMonths(endDate, startDate);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';

  if (years > 0) {
    result += `${years} year${years > 1 ? 's' : ''}`;
  }

  if (months > 0) {
    if (result) result += ' and ';
    result += `${months} month${months > 1 ? 's' : ''}`;
  }

  if (!result) {
    result = '0 months';
  }

  return result;
};
