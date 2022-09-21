import PaintingList from './components/PaintingList';
import Section from 'components/Sections';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="top of week">
        <PaintingList paintings={paintings} />
        <PaintingList paintings={paintings} />
      </Section>
      <Section />
    </div>
  );
}
