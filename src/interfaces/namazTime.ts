export interface ITodayNamazTime {
  Fajr: String;
  Sunrise: String;
  Dhuhr: String;
  Asr: String;
  Maghrib: String;
  Isha: String;
  date: String;
}

export interface IUseNamazTime {
  todayNamazTime: ITodayNamazTime;
  setTodayNamazTime: React.Dispatch<React.SetStateAction<ITodayNamazTime>>;
  isNamazTimeLoading: Boolean;
  setIsNamazTimeLoading: React.Dispatch<React.SetStateAction<Boolean>>;
}
