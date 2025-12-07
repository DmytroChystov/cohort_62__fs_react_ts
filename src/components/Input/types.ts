export type InputTypes = "id" | "name" | "type"  | "placeholder" | "label" | "disabled" | "error";

export interface InputProps {
id?: string;
name: string;
type?: string;
placeholder?: string;
label:string;
disabled?: boolean;
error?: string | undefined;
}

