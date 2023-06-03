import { useState } from "react";
import { ITodayNamazTime } from "../interfaces/namazTime";

const useNamazTime = () => {
  const [todayNamazTime, setTodayNamazTime] = useState<ITodayNamazTime>({
    Asr: "",
    Sunrise: "",
    Fajr: "",
    date: "",
    Maghrib: "",
    Dhuhr: "",
    Isha: "",
  });

  const [isNamazTimeLoading, setIsNamazTimeLoading] = useState<Boolean>(false);

  return {
    todayNamazTime,
    setTodayNamazTime,
    isNamazTimeLoading,
    setIsNamazTimeLoading,
  };
};
export default useNamazTime;
