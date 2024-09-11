import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/system";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { FaHouse, FaList } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

interface IBottomNavProps {
  style?: SxProps<Theme>;
  className?: string;
}

export default function BottomNav({ style, className }: IBottomNavProps) {
  const [value, setValue] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const handlePath = useCallback((path: string) => {
    switch (path) {
      case "":
        setValue(0);
        break;
      case "todo":
        setValue(1);
        break;
      default:
        setValue(0);
    }
  }, []);

  const handleNavbar = useCallback((index: number) => {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/todo");
        break;
      default:
        navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    handlePath(pathName);
  }, [handlePath, pathName]);

  return (
    <Box>
      <BottomNavigation
        sx={style}
        className={className}
        showLabels
        value={value}
        onChange={(_event, index) => {          
          setValue(index)
          handleNavbar(index)
        }}
      >
        <BottomNavigationAction label="Home" icon={<FaHouse />} />
        <BottomNavigationAction label="Todo" icon={<FaList />} />
      </BottomNavigation>
    </Box>
  );
}
