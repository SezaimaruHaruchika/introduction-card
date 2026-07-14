import styled from 'styled-components';
import { ModernCard, GameCard, AntiqueCard } from './components/Card';

// カードを並べるギャラリーのスタイル：横並び、折り返し、中央寄せ、間隔、余白、最小高さ
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 32px;
  min-height: 100svh;
  box-sizing: border-box;
`;

function App() {
  return (
    <Gallery>
      <ModernCard
        name="Haruchika Sezaimaru"
        avatarSrc='../../public/profile.png'
        bio="Webシステム開発を中心に、要件理解から実装、品質確認、運用・保守まで責任を持って対応しております。
単なる実装だけでなく、「実際の運用を想定した設計」「保守しやすいコード」を重視しています。"
        githubUrl="https://github.com/"
        xUrl="https://x.com/"
      />
      <GameCard
        name="Haruchika Sezaimaru"
        bio="Webシステム開発を中心に、要件理解から実装、品質確認、運用・保守まで責任を持って対応しております。
単なる実装だけでなく、「実際の運用を想定した設計」「保守しやすいコード」を重視しています。"
        githubUrl="https://github.com/"
        xUrl="https://x.com/"
      />
      <AntiqueCard
        name="Haruchika Sezaimaru"
        bio="Webシステム開発を中心に、要件理解から実装、品質確認、運用・保守まで責任を持って対応しております。
単なる実装だけでなく、「実際の運用を想定した設計」「保守しやすいコード」を重視しています。"
        githubUrl="https://github.com/"
        xUrl="https://x.com/"
      />
    </Gallery>
  );
}

export default App;
