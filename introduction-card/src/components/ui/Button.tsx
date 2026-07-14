import styled from 'styled-components';
import { fonts, spacing } from '../theme/theme';

// 練習1のButton：明るい配色 + hoverで浮く + transition
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xs}px;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ theme }) => theme.colors.primary}55;
    opacity: 0.92;
  }

  &:active {
    transform: translateY(0);
  }
`;

// SNSボタン：Buttonを小さくしたバリエーション
export const SnsButton = styled(Button)`
  padding: ${spacing.xs}px ${spacing.sm}px;
  font-size: 13px;
  border-radius: 999px;
  text-decoration: none;
`;