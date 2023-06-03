import { ITodayNamazTime } from "../interfaces/namazTime";

interface NamazTimeProps {
  todayNamazTime: ITodayNamazTime;
}

const NamazTime = (props: NamazTimeProps): JSX.Element => {
  return (
    <div className="h-full flex items-center justify-center">
      <ul className="h-fit namaztime flex flex-col items-center justify-center space-y-8">
        <li>
          <a
            href="https://www.youtube.com/watch?v=TT2aFT_tMXQ&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
            target="_blank"
            className="cursor-pointer hover:text-lime-500"
          >
            Fajr:
          </a>{" "}
          {props.todayNamazTime.Fajr}
        </li>

        <li>Shuruq: {props.todayNamazTime.Sunrise}</li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=wOG6r1iaPm8&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
            target="_blank"
            className="cursor-pointer hover:text-lime-500"
          >
            Dhuhr:
          </a>{" "}
          {props.todayNamazTime.Dhuhr}
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=-_FADpsVYig&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
            target="_blank"
            className="cursor-pointer hover:text-lime-500"
          >
            Asr:
          </a>{" "}
          {props.todayNamazTime.Asr}
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=Idr_FL7Plb8&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
            target="_blank"
            className="cursor-pointer hover:text-lime-500"
          >
            Maghrib:
          </a>{" "}
          {props.todayNamazTime.Maghrib}
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=YAActF11cw4&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
            target="_blank"
            className="cursor-pointer hover:text-lime-500"
          >
            Isha:
          </a>{" "}
          {props.todayNamazTime.Isha}
        </li>
      </ul>
    </div>
  );
};

export default NamazTime;
