import CityDropdown from "./components/CityDropdown";
import useNamazTime from "./hooks/useNamazTime";
import NamazTime from "./components/NamazTime";
const App = (): JSX.Element => {
  const {
    todayNamazTime,
    setTodayNamazTime,
    isNamazTimeLoading,
    setIsNamazTimeLoading,
  } = useNamazTime();

  return (
    <div className="main h-screen flex flex-col">
      <CityDropdown
        setIsNamazTimeLoading={setIsNamazTimeLoading}
        setTodayNamazTime={setTodayNamazTime}
        isNamazTimeLoading={isNamazTimeLoading}
      />
      {isNamazTimeLoading ? (
        <></>
      ) : (
        <NamazTime todayNamazTime={todayNamazTime} />
      )}
    </div>
  );
};

export default App;
