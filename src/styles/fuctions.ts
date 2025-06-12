import { CSS, type Transform } from "@dnd-kit/utilities";
import type React from "react";

const draggableTaskStlyes = (transform: Transform | null,isDragging:boolean ) :React.CSSProperties => {
    const styleForDraggableTask = {
        transform: CSS.Translate.toString(transform),
        transition: "transform 0.2s ease",
        pointerEvents: isDragging ? "none" as React.CSSProperties['pointerEvents'] : "auto" as React.CSSProperties['pointerEvents'],
        opacity: isDragging ? 0.5 : 1,
      };
    return styleForDraggableTask;
}
 
export default draggableTaskStlyes;