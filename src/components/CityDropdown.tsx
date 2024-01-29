import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Space, Button } from "antd";
import { ITodayNamazTime } from "../interfaces/namazTime";

interface ICityDropdownProps {
  setIsNamazTimeLoading: React.Dispatch<React.SetStateAction<Boolean>>;
  setTodayNamazTime: React.Dispatch<React.SetStateAction<ITodayNamazTime>>;
  isNamazTimeLoading: Boolean;
}

const CityDropdown = ({
  setIsNamazTimeLoading,
  setTodayNamazTime,
  isNamazTimeLoading,
}: ICityDropdownProps): JSX.Element => {
  const items: MenuProps["items"] = [
    {
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Oskemen");
          }}
        >
          Oskemen
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
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Astana");
          }}
        >
          Astana
        </button>
      ),
      key: "2",
    },
    {
      label: (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCity("Shymkent");
          }}
        >
          Shymkent
        </button>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: "Taraz (in progress）",
      key: "4",
      disabled: true,
    },
  ];

  const [city, setCity] = useState<String>("Oskemen");

  const cityProps = {
    items,
  };
  useEffect(() => {
    setIsNamazTimeLoading(true);
    let link = "";
    if (city === "Oskemen") {
      link = `${import.meta.env.VITE_API_HOST}/oskemen`;
    } else if (city === "Almaty") {
      link = `${import.meta.env.VITE_API_HOST}/almaty`;
    } else if (city === "Shymkent") {
      link = `${import.meta.env.VITE_API_HOST}/shymkent`;
    } else {
      link = `${import.meta.env.VITE_API_HOST}/astana`;
    }
    axios.get(link).then((res) => {
      setTodayNamazTime(res.data);
      setIsNamazTimeLoading(false);
    });
  }, [city]);
  return (
    <div className="h-min mt-2 ml-2">
      <Dropdown menu={cityProps} trigger={["click"]} className="text-white">
        <Button loading={isNamazTimeLoading ? true : false}>
          <Space>{city}</Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default CityDropdown;
