import { useEffect, useState } from "react";
import axios from "axios";
import useDate from "./hooks/useDate";
import { namazTime } from "./interfaces/namazTime";

import { DownOutlined } from "@ant-design/icons";
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
  const date = useDate();
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
  useEffect(() => {
    axios
      .get(
        city === "Усть-Каменогорск"
          ? "https://namaz.muftyat.kz/kk/api/times/2023/49.95/82.616667"
          : "https://namaz.muftyat.kz/kk/api/times/2023/43.238293/76.945465"
      )
      .then((res) => {
        setTodayNamazTime(
          res.data.result.find((namaz: namazTime) => namaz.date === date)
        );
      });
  }, [city]);

  const menuProps = {
    items,
  };
  return (
    <div className="h-screen flex flex-col">
      <div className="h-min">
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {city}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <ul className="h-full flex flex-col items-center justify-center text-5xl space-y-8">
        <li>Fajr: {todayNamazTime.Fajr}</li>

        <li>Shuruq: {todayNamazTime.Sunrise}</li>

        <li>Dhuhr: {todayNamazTime.Dhuhr}</li>

        <li>{todayNamazTime.Asr}</li>

        <li>{todayNamazTime.Maghrib}</li>

        <li>{todayNamazTime.Isha}</li>
      </ul>
    </div>
  );
};

export default App;
