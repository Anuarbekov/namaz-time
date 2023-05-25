import { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="h-screen flex flex-col">
      <div className="h-min">
        <Dropdown menu={menuProps} trigger={["click"]}>
          <Button loading={isNamazTimeLoading ? true : false}>
            <Space>
              {city}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      {isNamazTimeLoading ? (
        ""
      ) : (
        <ul className="h-full flex flex-col items-center justify-center text-5xl space-y-8">
          <li>Fajr: {todayNamazTime.Fajr}</li>

          <li>Shuruq: {todayNamazTime.Sunrise}</li>

          <li>Dhuhr: {todayNamazTime.Dhuhr}</li>

          <li>Asr: {todayNamazTime.Asr}</li>

          <li>Maghrib: {todayNamazTime.Maghrib}</li>

          <li>Isha: {todayNamazTime.Isha}</li>
        </ul>
      )}
    </div>
  );
};

export default App;
