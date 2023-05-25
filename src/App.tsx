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
            setCity("Усть-Каменогорск");
          }}
        >
          Усть-Каменогорск
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Алматы");
          }}
        >
          Алматы
        </button>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Астана（disabled）",
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
  const [city, setCity] = useState<String>("Алматы");
  const [isNamazTimeLoading, setIsNamazTimeLoading] = useState<Boolean>(false);

  useEffect(() => {
    setIsNamazTimeLoading(true);
    axios
      .get(
        city === "Усть-Каменогорск"
          ? `${import.meta.env.VITE_API_HOST}/oskemen`
          : `${import.meta.env.VITE_API_HOST}/almaty`
      )
      .then((res) => {
        setTodayNamazTime(res.data);
        setIsNamazTimeLoading(false);
      });
  }, [city]);

  const menuProps = {
    items,
  };
  return (
    <div className="main h-screen flex flex-col">
      <div className="h-min mt-2 ml-2">
        <Dropdown menu={menuProps} trigger={["click"]}>
          <Button loading={isNamazTimeLoading ? true : false}>
            <Space>{city}</Space>
          </Button>
        </Dropdown>
      </div>
      {isNamazTimeLoading ? (
        ""
      ) : (
        <div className="h-full flex items-center justify-center">
          <ul className="namaztime py-8 flex flex-col items-center justify-center space-y-8">
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
                href="https://www.youtube.com/watch?v=TT2aFT_tMXQ&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Dhuhr:
              </a>{" "}
              {todayNamazTime.Dhuhr}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=TT2aFT_tMXQ&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Asr:
              </a>{" "}
              {todayNamazTime.Asr}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=TT2aFT_tMXQ&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
                target="_blank"
                className="cursor-pointer hover:text-lime-500"
              >
                Maghrib:
              </a>{" "}
              {todayNamazTime.Maghrib}
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=TT2aFT_tMXQ&list=PLgfsDRXXIm97D7A_cMhbXNRKlKan_Zwy8"
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
