import PaintingList from './components/PaintingList';
import Section from 'components/Sections';
import paintings from './paintings.json';
import { Box } from './components/Box';
import Counter from './components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
import Form from 'components/Form';
import { Component } from 'react';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default class App extends Component {
  formHandlerSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <Box bg="mute" color="text">
        <div>
          <Section title="top of week">
            <PaintingList paintings={paintings} />
            <PaintingList paintings={paintings} />
          </Section>
          <Section />
          <Counter />
          <Dropdown />
          <ColorPicker options={colorPickerOptions} />
          <Form onSubmit={this.formHandlerSubmit} />
        </div>
      </Box>
    );
  }
}
