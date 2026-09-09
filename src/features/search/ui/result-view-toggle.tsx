import { ButtonGroup } from "@/shared/ui/shadcn/button-group";
import { useState } from "react";
import { Button } from "@/shared/ui/shadcn/button";
import type { Dispatch, SetStateAction } from "react";
export default function ResultViewToggle({
  selectedView,
  setSelectedView
}: {
    selectedView: string,
    setSelectedView: Dispatch<SetStateAction<"list" | "tabs">>
}) {
  return (
    <ButtonGroup>
      <Button
        size={"sm"}
        className={`${selectedView === 'list' ? "bg-blue-300" : null} hover:bg-darken`}
        onClick={() => setSelectedView("list")}>
        List
      </Button>
      <Button
        size={'sm'}
        className={`${selectedView === 'tabs' ? "bg-blue-300" : null} hover:bg-darken`}
        onClick={() => setSelectedView("tabs")}>
        Tabs
      </Button>
    </ButtonGroup>
  );
}