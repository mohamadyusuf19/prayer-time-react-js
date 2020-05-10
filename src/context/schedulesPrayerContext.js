import { createContext } from "react";

const schedulesPrayerContext = createContext();

export const SchedulesProvider = schedulesPrayerContext.Provider;
export const SchedulesConsumer = schedulesPrayerContext.Consumer;

export default schedulesPrayerContext;
