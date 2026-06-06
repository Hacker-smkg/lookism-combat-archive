import { TRAINING_PROGRAMS } from "@lookism/core";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { BodyText, DisplayText, Panel, SystemScroll, mobileColors } from "../../components/system-view";

export default function TrainTab() {
  return (
    <SystemScroll>
      <Panel title="Training Hub">
        <DisplayText>Train</DisplayText>
        <BodyText muted>Shared martial art, mastery, and fighter-type progressions.</BodyText>
      </Panel>
      {TRAINING_PROGRAMS.map((program) => (
        <Link key={program.id} href={`/training/${program.id}`} asChild>
          <Pressable style={{ borderColor: mobileColors.border, borderWidth: 1, padding: 14, gap: 6, backgroundColor: mobileColors.panel }}>
            <Text selectable style={{ color: mobileColors.text, fontSize: 18 }}>{program.title}</Text>
            <Text selectable style={{ color: mobileColors.muted, lineHeight: 22 }}>{program.subtitle}</Text>
          </Pressable>
        </Link>
      ))}
    </SystemScroll>
  );
}
