import { Size, Color } from "zebbra"

export interface InputProps extends Size, Color {
    className?: string
    type?: string,
    placeholder?: string,
    readonly?: boolean
    onKeyDown?: Function
    onEnter?: Function
}