import { GiFirePunch, GiClawHammer, GiThorHammer } from "react-icons/gi";
export function FrameworkIcon(props) {
  switch (props.level) {
    case "murro":
      return <GiFirePunch className="text-ROSE dark:text-CYAN text-8xl" />;
    case "martelo":
      return <GiClawHammer className="text-ROSE dark:text-CYAN text-8xl" />;
    case "marreta":
      return <GiThorHammer className="text-ROSE dark:text-CYAN text-8xl" />;
    default:
      return null;
  }
}
