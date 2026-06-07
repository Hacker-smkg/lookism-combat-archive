import { Redirect } from "expo-router";
import { useMobileSystemStore } from "../lib/mobile-store";

export default function IndexRoute() {
  const { analysis, awakeningAccepted, guestMode, userId } = useMobileSystemStore((state) => state);
  if (analysis) return <Redirect href="/system" />;
  if (awakeningAccepted) return <Redirect href="/diagnosis" />;
  if (guestMode || userId) return <Redirect href="/awakening" />;
  return <Redirect href="/login" />;
}
