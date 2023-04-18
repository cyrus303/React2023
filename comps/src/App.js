import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 1,
      lable: 'Can I Use React on a Project',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minima iusto similique vitae amet a illo adipisci deserunt, quod quasi ipsum itaque iste explicabo quia, at magni atque sunt consectetur',
    },
    {
      id: 2,
      lable: 'Can I Use TypeScript on a Project',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minima iusto similique vitae amet a illo adipisci deserunt, quod quasi ipsum itaque iste explicabo quia, at magni atque sunt consectetur',
    },
    {
      id: 3,
      lable: 'Can I Use CSS on a Project',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minima iusto similique vitae amet a illo adipisci deserunt, quod quasi ipsum itaque iste explicabo quia, at magni atque sunt consectetur',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
