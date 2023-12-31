import { ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';
import { GroupBox, Radio, ScrollView, Window, WindowContent } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  #cutout {
    background: ${({ theme }) => theme.canvas};
    color: ${({ theme }) => theme.materialText};
    padding: 1rem;
    width: 300px;
    & p {
      margin-bottom: 2rem;
    }
  }
`;

export default {
  title: 'Controls/Radio',
  component: Radio,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
} as ComponentMeta<typeof Radio>;

export function Default() {
  const [state, setState] = useState('Pear');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);

  return (
    <Window>
      <WindowContent>
        <GroupBox label='Fruits'>
          <Radio
            checked={state === 'Pear'}
            onChange={handleChange}
            value='Pear'
            label='🍐 Pear'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Orange'}
            onChange={handleChange}
            value='Orange'
            label='🍊 Orange'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Kiwi'}
            onChange={handleChange}
            value='Kiwi'
            label='🥝 Kiwi'
            name='fruits'
          />
          <br />
          <Radio
            checked={state === 'Grape'}
            onChange={handleChange}
            value='Grape'
            label='🍇 Grape'
            name='fruits'
            disabled
          />
        </GroupBox>
      </WindowContent>
    </Window>
  );
}

Default.story = {
  name: 'default'
};

export function Flat() {
  const [state, setState] = useState('Pear');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);

  return (
    <Window>
      <WindowContent>
        <ScrollView id='cutout'>
          <p>
            When you want to use radio buttons on a light background (like
            scrollable content), just use the flat variant:
          </p>

          <GroupBox variant='flat' label='Fruits'>
            <Radio
              variant='flat'
              checked={state === 'Pear'}
              onChange={handleChange}
              value='Pear'
              label='🍐 Pear'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Orange'}
              onChange={handleChange}
              value='Orange'
              label='🍊 Orange'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Kiwi'}
              onChange={handleChange}
              value='Kiwi'
              label='🥝 Kiwi'
              name='fruits'
            />
            <br />
            <Radio
              variant='flat'
              checked={state === 'Grape'}
              onChange={handleChange}
              value='Grape'
              label='🍇 Grape'
              name='fruits'
              disabled
            />
          </GroupBox>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

Flat.story = {
  name: 'flat'
};
