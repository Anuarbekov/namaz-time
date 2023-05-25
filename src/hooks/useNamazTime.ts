import { useState } from "react";
import { ITodayNamazTime, IUseNamazTime } from "../interfaces/namazTime";

const useNamazTime = (): IUseNamazTime => {
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
