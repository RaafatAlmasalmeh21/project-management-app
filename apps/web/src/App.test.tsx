function TestApp() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>🚀 BuildPro Test App</h1>
      <p>If you can see this, React is working!</p>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{ 
          padding: '8px 16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer' 
        }}
      >
        Test Button
      </button>
    </div>
  )
}

export default TestApp 