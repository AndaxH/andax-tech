export default function ThreadsEmbed({ permalink, height = 300 }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '16px',
        marginBottom: '16px',
        minHeight: '256px',
        height: 'fit-content'
      }}
    >
      <iframe
        src={`${permalink}/embed/`}
        style={{
          border: 'none',
          borderRadius: '16px',
          maxWidth: '650px',
          minWidth: '270px',
          width: '100%',
          display: 'block',
          height: `${height}px`
        }}
      />
    </div>
  )
}
