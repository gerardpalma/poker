import React, { useRef, useContext } from 'react';
import Container from '../components/layout/Container';
import { Redirect, Link } from 'react-router-dom';
import HeadingWithLogo from '../components/typography/HeadingWithLogo';
import Button from '../components/buttons/Button';
import { Input } from '../components/forms/Input';
import { Form } from '../components/forms/Form';
import { FormGroup } from '../components/forms/FormGroup';
import { ButtonGroup } from '../components/forms/ButtonGroup';
import { Label } from '../components/forms/Label';
import RelativeWrapper from '../components/layout/RelativeWrapper';
import ShowPasswordButton from '../components/buttons/ShowPasswordButton';
import useScrollToTopOnPageLoad from '../hooks/useScrollToTopOnPageLoad';
import authContext from '../context/auth/authContext';
import contentContext from '../context/content/contentContext';
import { TiledBackgroundImage } from '../components/decoration/TiledBackgroundImage';

const RegistrationPage = () => {
  
  const { register, isLoggedIn } = useContext(authContext);

  useScrollToTopOnPageLoad();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);

  if (isLoggedIn) return <Redirect to="/" />;
  return (
    <RelativeWrapper>
      {/* <TiledBackgroundImage /> */}
      <Container
        fullHeight
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="6rem 2rem 2rem 2rem"
        contentCenteredMobile
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            const name = nicknameRef.current.value;
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            if (
              name &&
              email &&
              password &&
              name.length >= 5 &&
              name.length <= 12 &&
              email.length >= 0 &&
              password.length >= 6
            ) {
              register(name, email, password);
            }
          }}
        >
          <HeadingWithLogo textCentered hideIconOnMobile={false}>
            Registration
          </HeadingWithLogo>
          <FormGroup>
            <Label htmlFor="email">
             E-mail
            </Label>
            <Input type="email" name="email" ref={emailRef} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nickname">
              Nickname
            </Label>
            <Input
              type="text"
              name="nickname"
              autoComplete="off"
              ref={nicknameRef}
              minLength="5"
              maxLength="12"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              Password
            </Label>
            <ShowPasswordButton passwordRef={passwordRef} />
            <Input
              type="password"
              name="password"
              minLength="6"
              autoComplete="new-password"
              ref={passwordRef}
              required
            />
          </FormGroup>
          {/* <FormGroup>
            <Label htmlFor="dob">Date of birth (18+)</Label>
            <Input type="date" name="dob" />
          </FormGroup> */}
          <ButtonGroup>
            <Button primary type="submit" fullWidth>
              Complete Registraion
            </Button>
            <Link to="/login">
              I already have an account!
            </Link>
          </ButtonGroup>
        </Form>
      </Container>
    </RelativeWrapper>
  );
};

export default RegistrationPage;
