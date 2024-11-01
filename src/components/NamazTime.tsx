import { NamazTimeProps } from "../interfaces/namazTime";

const NamazTime = ({ todayNamazTime }: NamazTimeProps): JSX.Element => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ul className="px-5 h-fit namaztime flex flex-col items-center justify-center space-y-6">
        {todayNamazTime &&
          todayNamazTime.map((prayer) => (
            <li
              key={prayer.name}
              className={`w-full text-center rounded-md cursor-pointer ${prayer.isNext ? "bg-green-500 hover:text-black" : "hover:text-blue-500"}`}
            >
              {prayer.name}: {prayer.time}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NamazTime;
