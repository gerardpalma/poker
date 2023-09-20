import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import HeadingWithLogo from '../components/typography/HeadingWithLogo';
import Button from '../components/buttons/Button';
import { FormGroup } from '../components/forms/FormGroup';
import { Label } from '../components/forms/Label';
import { Input } from '../components/forms/Input';
import styled from 'styled-components';
import { Form } from '../components/forms/Form';
import RelativeWrapper from '../components/layout/RelativeWrapper';
import globalContext from '../context/global/globalContext';
import contentContext from '../context/content/contentContext';
import {createTable} from '../hooks/useCreateAndDeleteTable'
import tableContext from '../context/table/tableContext';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  ${FormGroup} > *~* {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 624px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 160px;

    ${FormGroup} > *~* {
      margin: 0.5rem 0;
    }
  }
`;

// const DangerButton = styled(Button)`
//   background-color: ${(props) => props.theme.colors.dangerColorLighter};
//   color: ${(props) => props.theme.colors.fontColorLight};

//   &:visited,
//   &:hover,
//   &:active,
//   &:focus {
//     background-color: ${(props) => props.theme.colors.dangerColor};
//     color: ${(props) => props.theme.colors.fontColorLight};
//   }
// `;

const CreatingNewRoom = () => {
  
  const { userName, email } = useContext(globalContext);
  const { createTable, getCurrentTable } = useContext(tableContext);
  const [number, setNumber] =  useState(0);

  const changeNumberInputHandle = (e) => {
    console.log(e.target.value)
    setNumber(e.target.value)
  }
  const onClickCreateButton = (number) => {
    getCurrentTable()
  }
  return (
    <RelativeWrapper>
      {/* <TiledBackgroundImage /> */}
      <Container
        fullHeight
        flexDirection="column"
        justifyContent="center"
        contentCenteredMobile
        alignItems="center"
        padding="6rem 2rem 2rem 2rem"
      >
        <Form onSubmit={(e) => e.preventDefault()}>
          <HeadingWithLogo textCentered hideIconOnMobile={false}>
            Create New Table
          </HeadingWithLogo>
          <Wrapper>
            <FormGroup style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
              <Label>Seat NUmber</Label>
              <Input id="number" value={number} onChange={changeNumberInputHandle}/>
            </FormGroup>
            <FormGroup style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
              <Button primary onClick = {()=> onClickCreateButton(number)}>
                Create
              </Button>
            </FormGroup>
            <Button
              as={Link}
              to="/"
              secondary
              style={{ gridColumnStart: '1', gridColumnEnd: '3' }}
              
            >
              Back to Home
            </Button>
          </Wrapper>
        </Form>
      </Container>
    </RelativeWrapper>
  );
};

export default CreatingNewRoom;
