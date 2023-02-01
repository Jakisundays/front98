import { loginSwitch, registerSwitch } from "../../store/slices/windowsSlice";

export const iconos = [
  {
    title: "Sign up",
    icon: require("../../assets/compu.png"),
    funcion: () => registerSwitch(),
  },
  {
    title: "Login",
    icon: require("../../assets/key.ico"),
    funcion: () => loginSwitch(),
  },
];
