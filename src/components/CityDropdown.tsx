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

  const [city, setCity] = useState<String>("Ust-Kamenogorsk");

  const cityProps = {
    items,
  };
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
