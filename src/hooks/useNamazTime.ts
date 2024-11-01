import { useState } from "react";
import { ITodayNamazTime } from "../interfaces/namazTime";

const useNamazTime = () => {
  const [todayNamazTime, setTodayNamazTime] = useState<ITodayNamazTime[]>([
    { name: "Fajr", time: "", isNext: false },
    { name: "Sunrise", time: "", isNext: false },
    { name: "Dhuhr", time: "", isNext: false },
    { name: "Asr", time: "", isNext: false },
    { name: "Maghrib", time: "", isNext: false },
    { name: "Isha", time: "", isNext: false },
  ]);

  const [isNamazTimeLoading, setIsNamazTimeLoading] = useState<boolean>(false);

  return {
    todayNamazTime,
    setTodayNamazTime,
    isNamazTimeLoading,
    setIsNamazTimeLoading,
  };
};
export default useNamazTime;
