import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { projects } from '@/data/projects';

export const runtime = 'edge';

// Editorial Studio 配色：纸张白 / 墨黑 / 克莱因蓝
const PAPER = '#f6f4ef';
const INK = '#26272e';
const KLEIN = '#2438b8';
const GRAY = '#75767d';
const HAIRLINE = '#dcd9d0';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get('id');

  const project = projectId ? projects.find((p) => p.id === projectId) : null;

  const title = project ? project.title : 'Fengmin';
  const subtitle = project ? project.subtitle : '独立开发者 & 产品构建者';
  const description = project
    ? project.description
    : '实时协作、AI Agent、数据可视化。把想法做成产品。';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: PAPER,
          fontFamily: 'Noto Serif SC, Georgia, serif',
          padding: '56px 72px',
        }}
      >
        {/* 顶部元信息行 — 刊号 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: `1px solid ${INK}`,
            paddingBottom: '20px',
            fontSize: '18px',
            letterSpacing: '0.15em',
            color: GRAY,
          }}
        >
          <div style={{ display: 'flex' }}>ISSUE Nº 01 — 2026</div>
          <div style={{ display: 'flex' }}>PORTFOLIO</div>
        </div>

        {/* 主内容 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '0.15em',
              color: KLEIN,
              display: 'flex',
            }}
          >
            {project ? `Nº ${String(projects.indexOf(project) + 1).padStart(2, '0')} — WORK` : subtitle.toUpperCase()}
          </div>

          <div
            style={{
              fontSize: project ? '72px' : '96px',
              fontWeight: 700,
              color: INK,
              lineHeight: 1.1,
              display: 'flex',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: '30px',
              color: GRAY,
              display: 'flex',
            }}
          >
            {project ? subtitle : description}
          </div>
        </div>

        {/* 底部元信息行 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: `1px solid ${HAIRLINE}`,
            paddingTop: '20px',
            fontSize: '18px',
            letterSpacing: '0.15em',
            color: GRAY,
          }}
        >
          <div style={{ display: 'flex' }}>FENGMIN — OMNILI.DEV</div>
          <div style={{ display: 'flex', color: KLEIN }}>
            {String(projects.length).padStart(2, '0')} WORKS
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
