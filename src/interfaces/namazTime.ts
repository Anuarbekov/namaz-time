export interface ITodayNamazTime {
  name: string;
  time: string;
  isNext: boolean;
}
export interface IUseNamazTime {
  todayNamazTime: ITodayNamazTime;
  setTodayNamazTime: React.Dispatch<React.SetStateAction<ITodayNamazTime>>;
  isNamazTimeLoading: boolean;
  setIsNamazTimeLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ICityDropdownProps {
  setIsNamazTimeLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTodayNamazTime: React.Dispatch<React.SetStateAction<ITodayNamazTime[]>>;
  isNamazTimeLoading: boolean;
}
export interface NamazTimeProps {
  todayNamazTime: ITodayNamazTime[];
}
