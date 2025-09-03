const BuggyComponent = () => {
  throw new Error("Error intencional ⚠️");
  return <p>Esto nunca se verá</p>;
};

export default BuggyComponent;