import sistemas from './sistemas.jpg'


function Catalogo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', padding: '1rem' }}>
      <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <h2>Catalogo de servicios</h2>
        <p>
        Asesoría técnica y escalable en desarrollo y gestion de software de cualquier indole.
        </p>
      </div>
      <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
         <img
          src={sistemas}
          alt="Catalogo de sistemas"
          style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }}
        />
      </div>
    </div>

  );
}

export default Catalogo;