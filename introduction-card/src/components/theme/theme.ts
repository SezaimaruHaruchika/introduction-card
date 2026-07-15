// 全カード共通の余白（8の倍数）とフォント（2種類）。デザインごとに変えない固定値。
export const spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const fonts = {
  heading: "'Poppins', 'Segoe UI', sans-serif",
  body: "'Inter', 'Segoe UI', sans-serif",
} as const;

/*- ---------- Themeを定義(3つ) ---------- */

export type ThemeName = 'modern' | 'game' | 'antique';

export interface ThemeType {
  name: ThemeName;
  colors: {
    background: string;
    primary: string;
    text: string;
  };
}

// モダン調のデザイン background: 灰色、primary: 濃紺、text: 白
export const modernTheme: ThemeType = {
  name: 'modern',
  colors: {
    background: '#878787',
    primary: '#18181b',
    text: '#ffffff',
  },
};

// Valorant風のデザイン background: 暗い青、primary: 赤、text: 白
export const gameTheme: ThemeType = {
  name: 'game',
  colors: {
    background: '#1b1d2a',
    primary: '#ff3d68',
    text: '#f4f4f6',
  },
};

// アンティーク調のデザイン background: 薄いベージュ、primary: 茶色、text: 濃い茶色
export const antiqueTheme: ThemeType = {
  name: 'antique',
  colors: {
    background: '#f3e7d0',
    primary: '#b4802d',
    text: '#4b3421',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
