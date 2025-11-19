import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Bea - Tech Problem Solver';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Open Graph image generation
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '80px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #2563eb, #3b82f6)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            Bea
          </div>
          <div
            style={{
              fontSize: 40,
              color: '#374151',
              textAlign: 'center',
              maxWidth: 800,
            }}
          >
            Tech Problem Solver
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#6b7280',
              marginTop: 20,
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            I make your tech problems disappear. Simply.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
