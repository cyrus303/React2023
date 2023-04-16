import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 1,
      lable: 'Can I Use React on a Project',
      content: 'You can use React on any project you want',
    },
    {
      id: 2,
      lable: 'Can I Use TypeScript on a Project',
      content: 'You can use TypeScript on any project you want',
    },
    {
      id: 3,
      lable: 'Can I Use CSS on a Project',
      content: 'You can use CSS on any project you want',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
