import styled from 'styled-components';
import { fonts } from '../theme/theme';

// Name（h2）とBio（p）の共通部分：余白なし・フォント・文字色
export const Name = styled.h2`
  margin: 0;
  font-family: ${fonts.heading};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

// Bio（p）のスタイル：余白なし・フォント・文字色・行間・不透明度
export const Bio = styled.p`
  margin: 0;
  font-family: ${fonts.body};
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.72;
`;