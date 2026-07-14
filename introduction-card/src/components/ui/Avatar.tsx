import styled from 'styled-components';
import { fonts } from '../theme/theme';

// Avatarの外枠：円形、リング付き、背景色はテーマのprimaryを半透明にしたもの
interface AvatarWrapperProps {
  $size: number;
  $ring: number;
}

// Avatarの外枠のスタイルを定義
const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ $ring }) => $ring}px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primary}33;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${fonts.heading};
  font-weight: 700;
  font-size: ${({ $size }) => $size / 2.4}px;
`;

// Avatarの画像：円形、親要素に合わせて拡大縮小
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// AvatarコンポーネントのPropsを定義
interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  ringWidth?: number;
  fallback?: string;
}

// 画像があれば表示、なければイニシャルを表示
export function Avatar({ src, alt = '', size = 72, ringWidth = 3, fallback }: AvatarProps) {
  return (
    <AvatarWrapper $size={size} $ring={ringWidth}>
      {src ? <AvatarImage src={src} alt={alt} /> : <span>{fallback}</span>}
    </AvatarWrapper>
  );
}
