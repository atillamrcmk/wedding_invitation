"use client";

import { cn } from "@/lib/cn";
import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { IconButton } from "./icon-button";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "fixed inset-0 z-50 m-auto w-[calc(100%-2rem)] max-w-lg",
        "rounded-lg border border-border bg-background-elevated p-0 shadow-md",
        "backdrop:bg-foreground/20 backdrop:backdrop-blur-sm",
        className,
      )}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex flex-col">
        {(title || description) && (
          <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
            <div>
              {title && (
                <h2 className="text-lg font-medium text-foreground">{title}</h2>
              )}
              {description && (
                <p className="mt-1 text-sm text-foreground-secondary">
                  {description}
                </p>
              )}
            </div>
            <IconButton label="Kapat" onClick={onClose} size="sm">
              <X className="size-4" />
            </IconButton>
          </div>
        )}
        <div className="px-6 py-5">{children}</div>
      </div>
    </dialog>
  );
}
