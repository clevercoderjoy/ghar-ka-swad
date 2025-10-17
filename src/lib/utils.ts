import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for conditional classnames
 * @param inputs - class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
