// eslint-disable-next-line react/prop-types
const Placeholder = ({ componentName }) => (
  <div className='placeholder'>
    <p className='placeholdertext'>
      The component
      {' '}
      <strong>{componentName}</strong>
      {' '}
      has not been created yet.
    </p>
  </div>
);

export default Placeholder;