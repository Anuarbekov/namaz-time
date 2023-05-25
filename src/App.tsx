import { useEffect, useState } from "react";
import axios from "axios";
import { namazTime } from "./interfaces/namazTime";

import type { MenuProps } from "antd";
import { Dropdown, Space, Button } from "antd";

const App = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Ust-Kamenogorsk");
          }}
        >
          Ust-Kamenogorsk
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Almaty");
          }}
        >
          Almaty
        </button>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Astana（in progress）",
      key: "3",
      disabled: true,
    },
  ];
  const [todayNamazTime, setTodayNamazTime] = useState<namazTime>({
    Asr: "",
    Sunrise: "",
    Fajr: "",
    date: "",
    Maghrib: "",
    Dhuhr: "",
    Isha: "",
  });
  const [city, setCity] = useState<String>("Ust-Kamenogorsk");
  const [isNamazTimeLoading, setIsNamazTimeLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsNamazTimeLoading(true);
    axios
      .get(
        city === "Ust-Kamenogorsk"
          ? `${import.meta.env.VITE_API_HOST}/oskemen`
          : `${import.meta.env.VITE_API_HOST}/almaty`
      )
      .then((res) => {
        setTodayNamazTime(res.data);
        setIsNamazTimeLoading(false);
      });
  }, [city]);

  const cityProps = {
    items,
  };
  return (
    <div className="main h-screen flex flex-col">
      <div className="h-min mt-2 ml-2">
        <Dropdown menu={cityProps} trigger={["click"]} className="text-white">
          <Button loading={isNamazTimeLoading ? true : false}>
            <Space>{city}</Space>
          </Button>
        </Dropdown>
      </div>
      {isNamazTimeLoading ? (
        <></>
      ) : (
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
              {todayNamazTime.Fajr}
            </li>

            <li>Shuruq: {todayNamazTime.Sunrise}</li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=wOG6r1iaPm8&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Dhuhr:
              </a>{" "}
              {todayNamazTime.Dhuhr}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=-_FADpsVYig&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Asr:
              </a>{" "}
              {todayNamazTime.Asr}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=Idr_FL7Plb8&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Maghrib:
              </a>{" "}
              {todayNamazTime.Maghrib}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=YAActF11cw4&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Isha:
              </a>{" "}
              {todayNamazTime.Isha}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
