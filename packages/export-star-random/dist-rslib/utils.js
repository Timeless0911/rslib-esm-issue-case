import { ValueModelName, ValueType } from "./value/index.js";
const valueTypeToStateKey = {
    [ValueType.GOAL]: ValueModelName.GoalValue
};
export { valueTypeToStateKey };
