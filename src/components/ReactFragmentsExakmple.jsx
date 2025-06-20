const ChildComponent = () => {
  return (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </>
  );
};

const ReactFragmentsExample = () => {
  return (
    <ul>
      <ChildComponent />
    </ul>
  );
};

export default ReactFragmentsExample;
