import open from "open";
import { closeMainWindow } from "@raycast/api";

export default async() => {
    const url = "cleanshot://open-annotate";
    open(url);
    await closeMainWindow();
}
