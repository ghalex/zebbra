declare module 'polished'
declare module 'zebbra' {
  export type Sizes = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge' | 'huge'
  export interface Size {
    size?: Sizes
  }

  export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'gray' | 'light' | 'white' | 'black'
  export interface Color {
    color?: Colors
  }
 
  export interface Theme {
    fonts: {
      primary: string,
      monospace: string
    },
    sizes: {
      [size: string]: string
    },
    colors: {
      [color: string]: string
    },
    components: {
      input: (props: any) => {
        border: string,
        borderRadius: string,
        boxShadow: string,
        height: string,
        focusBorder: string,
        focusBoxShadow: string
      }
    }
  }
}