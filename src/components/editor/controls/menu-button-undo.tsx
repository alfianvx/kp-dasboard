import React, { useCallback } from "react";
import { Editor } from "@tiptap/core";
import { Toolbar } from "../ui/toolbar";
import { Icon } from "../ui/icon";

interface MenuButtonUndoProps {
  editor: Editor;
}

const MenuButtonUndo = ({ editor }: MenuButtonUndoProps) => {
  const onUndo = useCallback(
    () => editor.chain().focus().undo().run(),
    [editor]
  );

  return (
    <Toolbar.Button
      type="button"
      tooltip="Undo"
      tooltipShortcut={["Mod", "Z"]}
      disabled={!editor.can().undo()}
      onClick={onUndo}
    >
      <Icon name="Undo" />
    </Toolbar.Button>
  );
};

export default MenuButtonUndo;
