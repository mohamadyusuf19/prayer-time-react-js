export const formatDay = (params) => {
  switch (params) {
    case "Sunday":
      return "Ahad";
    case "Monday":
      return "Senin";
    case "Tuesday":
      return "Selasa";
    case "Wednesday":
      return "Rabu";
    case "Thursday":
      return "Kamis";
    case "Friday":
      return "Jum`at";
    case "Saturday":
      return "Sabtu";
    default:
      return null;
  }
};

export const formatMonth = () => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
};
