import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Checkbox, Fieldset, Button, Cutout } from '..';

const StyledCutout = styled(Cutout)`
  background: ${({ theme }) => theme.canvas};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;
storiesOf('Checkbox', module)
  .addDecorator(story => <Wrapper>{story()}</Wrapper>)
  .add('controlled group', () => <ControlledCheckboxGroupExample />)

  .add('uncontrolled', () => (
    <>
      <Checkbox
        name='cheese'
        value='cheese'
        label='Add extra cheese 🧀'
        defaultChecked
      />
      <br />
      <Checkbox name='pineapple' value='pineapple' label='Add pineapple 🍍' />
    </>
  ))
  .add('indeterminate / mixed value', () => <IndeterminateCheckboxExample />)

  .add('flat', () => (
    <StyledCutout style={{ padding: '1rem', width: '300px' }}>
      <p style={{ lineHeight: 1.3 }}>
        When you want to add input field on a light background (like scrollable
        content), just use the flat variant:
      </p>
      <div style={{ marginTop: '1rem' }}>
        <Checkbox
          name='conspirancy'
          variant='flat'
          value='single'
          label='Earth is flat 🌍'
          defaultChecked
        />
        <Checkbox
          name='conspirancy'
          variant='flat'
          defaultChecked={false}
          value='single'
          label='Reptilians rule the world 🦎'
          disabled
        />
      </div>
    </StyledCutout>
  ));

class ControlledCheckboxGroupExample extends React.Component {
  state = {
    steak: true,
    tortilla: false,
    pizza: false
  };

  handleChange = e => {
    const {
      target: { value }
    } = e;
    this.setState(prevState => ({
      [value]: !prevState[value]
    }));
  };

  reset = () => {
    this.setState({
      steak: false,
      tortilla: false,
      pizza: false
    });
  };

  render() {
    const { steak, tortilla, pizza } = this.state;

    return (
      <div style={{ maxWidth: '250px' }}>
        <Fieldset label='Party food'>
          <Checkbox
            checked={steak}
            onChange={this.handleChange}
            value='steak'
            label='Steak 🥩'
            name='food'
          />
          <br />
          <Checkbox
            checked={tortilla}
            onChange={this.handleChange}
            value='tortilla'
            label='Tortilla 🌯'
            name='food'
          />
          <br />
          <Checkbox
            checked={pizza}
            onChange={this.handleChange}
            value='pizza'
            label='Pizza 🍕'
            name='food'
            disabled
          />
        </Fieldset>
        <Button fullWidth style={{ marginTop: '1em' }} onClick={this.reset}>
          Diet mode
        </Button>
      </div>
    );
  }
}
class IndeterminateCheckboxExample extends React.Component {
  state = {
    cheese: 1,
    bacon: 0,
    broccoli: 0
  };

  toggleIngredient = e => {
    const {
      target: { value }
    } = e;
    this.setState(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }));
  };

  render() {
    const { cheese, bacon, broccoli } = this.state;

    const ingredientsArr = Object.values(this.state);
    const possibleIngredients = Object.keys(this.state).length;
    const chosenIngredients = ingredientsArr.reduce((a, b) => a + b, 0);

    const isIndeterminate = ![0, possibleIngredients].includes(
      chosenIngredients
    );

    return (
      <div style={{ maxWidth: '250px' }}>
        <Fieldset label='Pizza toppings'>
          <Checkbox
            name='allToppings'
            label='All'
            indeterminate={isIndeterminate}
            checked={
              !isIndeterminate && chosenIngredients === possibleIngredients
            }
            onChange={() => {
              if (isIndeterminate) {
                this.setState({
                  cheese: true,
                  bacon: true,
                  broccoli: true
                });
              } else if (ingredientsArr[0] === true) {
                this.setState({
                  cheese: false,
                  bacon: false,
                  broccoli: false
                });
              } else {
                this.setState({
                  cheese: true,
                  bacon: true,
                  broccoli: true
                });
              }
            }}
          />
          <div style={{ paddingLeft: '1.5rem' }}>
            <Checkbox
              checked={!!cheese}
              onChange={this.toggleIngredient}
              value='cheese'
              label='🧀 Extra cheese'
              name='ingredients'
            />
            <br />
            <Checkbox
              checked={!!bacon}
              onChange={this.toggleIngredient}
              value='bacon'
              label='🥓 Bacon'
              name='ingredients'
            />
            <br />
            <Checkbox
              checked={!!broccoli}
              onChange={this.toggleIngredient}
              value='broccoli'
              label='🥦 Broccoli'
              name='ingredients'
            />
          </div>
        </Fieldset>
      </div>
    );
  }
}
