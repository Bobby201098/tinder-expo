import { DataT } from "../../types";
import IMAGE_01 from "../images/01.png";
import IMAGE_02 from "../images/02.png";
import IMAGE_03 from "../images/03.png";
import IMAGE_04 from "../images/04.png";
import IMAGE_05 from "../images/05.png";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "Samsung",
    isOnline: true,
    match: "78",
    description:
      "Programator Full stack. Full-time",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "LG",
    match: "93",
    description:
      "Programator Full stack. Full-time",
    isOnline: false,
    message: "Someone like you. Someone who'll rattle the cages.",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "Apple",
    match: "45",
    description:
      "Programator Full stack. Full-time",
    isOnline: false,
    message:
      "Oh, hee-hee, aha. Ha, ooh, hee, ha-ha, ha-ha. And I thought my jokes were bad.",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "Ernst & Young",
    match: "88",
    description:
      "Programator Full stack. Full-time",
    isOnline: true,
    message: "Bats frighten me. It's time my enemies shared my dread.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "Oracle",
    match: "76",
    description:
      "Programator Full stack. Full-time",
    isOnline: false,
    message: "It's not who I am underneath but what I do that defines me.",
    image: IMAGE_05,
  },
  
];

export default data;
