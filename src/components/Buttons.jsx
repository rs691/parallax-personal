import { useEffect, useRef } from 'react';



const buttonStyle = {
  borderRadius: '6px',
  padding: '2rem 4rem',
  background: 'transparent',
  position: 'relative',
  fontSize: '20px',
  scale: '1',
  cursor: 'pointer',
  border: '0',
};

const canvasContainerStyle = {
  position: 'absolute',
  inset: '0',
  containerType: 'size',
};

const canvasWrapStyle = {
  height: '100%',
  border: '1px solid hsl(0 0% 100% / 0.65)',
  width: '100%',
  display: 'inline-block',
  transition: 'width 0.2s, height 0.2s',
  overflow: 'hidden',
  left: '50%',
  top: '50%',
  translate: '-50% -50%',
  position: 'relative',
  borderRadius: '6px',
};

const canvasStyle = {
  background: 'hsl(0 0% 0%)',
  position: 'absolute',
  width: '16rem',
  aspectRatio: '1',
  top: '50%',
  left: '50%',
  translate: '-50% -50%',
  borderRadius: '6px',
};

const textStyle = {
  zIndex: '5',
  fontFamily: '"JetBrains Mono", monospace',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'white',
  letterSpacing: '8px',
  opacity: '0',
  textIndent: '8px',
};

const Button = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <button style={buttonStyle}>
      <span style={canvasContainerStyle}>
        <span style={canvasWrapStyle}>
          <canvas ref={canvasRef} style={canvasStyle}></canvas>
        </span>
      </span>
      <span style={textStyle}>Download</span>
    </button>
  );
};

const App = () => {
  return (
    <>
    
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Button />
        <Button />
      </div>
    </>
  );
};

export default App;