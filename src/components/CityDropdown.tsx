import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Space, Button } from "antd";
import { ICityDropdownProps } from "../interfaces/namazTime";

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

  const [city, setCity] = useState<string>("Oskemen");

  const cityProps = {
    items,
  };
  useEffect(() => {
    const fetchNamazTime = async () => {
      let link = "";
      switch (city) {
        case "Oskemen":
          link = `${import.meta.env.VITE_API_HOST}/oskemen`;
          break;
        case "Almaty":
          link = `${import.meta.env.VITE_API_HOST}/almaty`;
          break;
        case "Shymkent":
          link = `${import.meta.env.VITE_API_HOST}/shymkent`;
          break;
        case "Astana":
          link = `${import.meta.env.VITE_API_HOST}/astana`;
          break;
        default:
          link = `${import.meta.env.VITE_API_HOST}/oskemen`;
          break;
      }
      const res = await axios.get(link);
      setTodayNamazTime(res.data);
      setIsNamazTimeLoading(false);
    };
    setIsNamazTimeLoading(true);
    fetchNamazTime();
  }, [city, setTodayNamazTime, setIsNamazTimeLoading]);

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
