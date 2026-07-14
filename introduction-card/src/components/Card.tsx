import styled, { ThemeProvider } from 'styled-components';
import { spacing, modernTheme, gameTheme, antiqueTheme } from './theme/theme';
import { Name, Bio } from './ui/Typography';
import { SnsButton } from './ui/Button';
import { Avatar } from './ui/Avatar';
import { IconGithub, IconX } from './ui/Icons';

// ユーザーの自己紹介カードのProps定義
export interface IntroductionCardProps {
  name: string;
  bio: string;
  avatarSrc?: string;
  githubUrl: string;
  xUrl: string;
}

// Card（styled.div）の共通部分：背景・hoverで浮く・transition・8の倍数の余白
const CardRoot = styled.div`
  box-sizing: border-box;
  width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${spacing.sm}px;
  padding: ${spacing.lg}px ${spacing.md}px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
`;

// SNSボタンの行（横並び・間隔・上余白）
const SnsRow = styled.div`
  display: flex;
  gap: ${spacing.xs}px;
  margin-top: ${spacing.xs}px;
`;

/* ---------- Modern ---------- */
// モダン調のデザイン
const ModernCardRoot = styled(CardRoot)`
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);

  &:hover {
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
  }
`;

export function ModernCard({ name, bio, avatarSrc, githubUrl, xUrl }: IntroductionCardProps) {
  return (
    <ThemeProvider theme={modernTheme}>
      <ModernCardRoot>
        <Avatar src={avatarSrc} alt={name} fallback={name.charAt(0)} size={72} ringWidth={2} />
        <div>
          <Name>{name}</Name>
          <Bio>{bio}</Bio>
        </div>
        <SnsRow>
          <SnsButton as="a" href={githubUrl} target="_blank" rel="noreferrer">
            <IconGithub size={16} /> GitHub
          </SnsButton>
          <SnsButton as="a" href={xUrl} target="_blank" rel="noreferrer">
            <IconX size={16} /> X
          </SnsButton>
        </SnsRow>
      </ModernCardRoot>
    </ThemeProvider>
  );
}

/* ---------- Game ---------- */
//Valorant風のデザイン
const GameCardRoot = styled(CardRoot)`
  border-radius: 16px;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 6px 6px 0 ${({ theme }) => theme.colors.primary};

  &:hover {
    box-shadow: 10px 10px 0 ${({ theme }) => theme.colors.primary};
  }
`;

const GameTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px ${spacing.xs}px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.primary};
`;

const GameName = styled(Name)`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GameSnsButton = styled(SnsButton)`
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export function GameCard({ name, bio, avatarSrc, githubUrl, xUrl }: IntroductionCardProps) {
  return (
    <ThemeProvider theme={gameTheme}> 
      <GameCardRoot>
        <GameTag>High School Student</GameTag>
        <Avatar src={avatarSrc} alt={name} fallback={name.charAt(0)} size={72} ringWidth={4} />
        <div>
          <GameName>{name}</GameName>
          <Bio>{bio}</Bio>
        </div>
        <SnsRow>
          <GameSnsButton as="a" href={githubUrl} target="_blank" rel="noreferrer">
            <IconGithub size={16} /> GitHub
          </GameSnsButton>
          <GameSnsButton as="a" href={xUrl} target="_blank" rel="noreferrer">
            <IconX size={16} /> X
          </GameSnsButton>
        </SnsRow>
      </GameCardRoot>
    </ThemeProvider>
  );
}

/* ---------- Antique ---------- */
//アンティーク調のデザイン
const AntiqueCardRoot = styled(CardRoot)`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.text}55;
  outline: 1px solid ${({ theme }) => theme.colors.text}55;
  outline-offset: -6px;
  box-shadow: 0 10px 20px rgba(75, 52, 33, 0.18);

  &:hover {
    box-shadow: 0 18px 32px rgba(75, 52, 33, 0.28);
  }
`;

const AntiqueName = styled(Name)`
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const AntiqueDivider = styled.div`
  width: 40px;
  height: 2px;
  margin: ${spacing.xs}px auto 0;
  background: ${({ theme }) => theme.colors.primary};
`;

const AntiqueSnsButton = styled(SnsButton)`
  border-radius: 4px;
  letter-spacing: 1px;
`;

export function AntiqueCard({ name, bio, avatarSrc, githubUrl, xUrl }: IntroductionCardProps) {
  return (
    <ThemeProvider theme={antiqueTheme}>
      <AntiqueCardRoot>
        <Avatar src={avatarSrc} alt={name} fallback={name.charAt(0)} size={72} ringWidth={3} />
        <div>
          <AntiqueName>{name}</AntiqueName>
          <AntiqueDivider />
          <Bio>{bio}</Bio>
        </div>
        <SnsRow>
          <AntiqueSnsButton as="a" href={githubUrl} target="_blank" rel="noreferrer">
            <IconGithub size={16} /> GitHub
          </AntiqueSnsButton>
          <AntiqueSnsButton as="a" href={xUrl} target="_blank" rel="noreferrer">
            <IconX size={16} /> X
          </AntiqueSnsButton>
        </SnsRow>
      </AntiqueCardRoot>
    </ThemeProvider>
  );
}
