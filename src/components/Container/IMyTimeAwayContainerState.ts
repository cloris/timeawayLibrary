import { IMyTimeAwayItem } from "../../models/timeAwayModel";
import { TimePeriod } from "../../models/timeAwayModel";
import { TimeAwayDialogType } from "../../models/timeAwayModel";

interface IMyTimeAwayContainerState {
  period?: TimePeriod;
  items?: IMyTimeAwayItem[];
  showDialogType?: TimeAwayDialogType;
}

export default IMyTimeAwayContainerState;