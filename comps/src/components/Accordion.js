function Accordion({ items }) {
  const rendrendItems = items.map((item) => {
    const { lable, content, id } = item;
    return (
      <div key={id}>
        <h1>{lable}</h1>
        <p>{content}</p>
      </div>
    );
  });

  //   console.log(structure);
  return <div>{rendrendItems}</div>;
}

export default Accordion;
