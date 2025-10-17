import { LucideIcon } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  detail: string;
  action: string | null;
}
