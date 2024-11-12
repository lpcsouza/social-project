import styled from "styled-components"
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
  margin-top: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text = styled.p`
  text-align: center;
`

function LoginPage() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>All the latest in the dev world, right here!</H4>
      <FormContainer>
        <H2>Log in to your account.</H2>
        <Form>
          <Input label="User or E-mail" type="email"></Input>
          <Input label="Password" type="password"></Input>
          <Button>Login</Button>
        </Form>
        <Text>
          Don't have an account? <a href="#">Sign up here!</a>
        </Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default LoginPage
