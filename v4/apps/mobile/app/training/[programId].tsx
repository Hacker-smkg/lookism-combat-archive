import { trainingProgramById } from "@lookism/core";
import { useLocalSearchParams } from "expo-router";
import { BodyText, DisplayText, Panel, SystemScroll } from "../../components/system-view";

export default function TrainingDetailScreen() {
  const { programId } = useLocalSearchParams<{ programId: string }>();
  const program = trainingProgramById(programId);
  return (
    <SystemScroll>
      <Panel title="Training Detail">
        <DisplayText>{program?.title ?? "Missing"}</DisplayText>
        <BodyText muted>{program?.subtitle ?? "Program not found."}</BodyText>
      </Panel>
      {program?.levels.map((level) => (
        <Panel key={level.id} title={level.label}>
          <BodyText>{level.weeks}</BodyText>
          <BodyText muted>{level.schedule.join(" · ")}</BodyText>
          <BodyText>Unlock: {level.unlockTest}</BodyText>
        </Panel>
      ))}
    </SystemScroll>
  );
}
