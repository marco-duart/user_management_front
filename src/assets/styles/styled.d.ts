import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      header: string;
      close: string;
      edit: string;
      delete: string;
      cancel: string;
      create: string;
      save: string;
      error: string;
      success: string;
      white: string;
    };
    fonts: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}
