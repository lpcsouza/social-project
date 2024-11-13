import styled from "styled-components"
import H4 from "../typography/H4"
import Textarea from "../inputs/Textarea"
import Button from "../inputs/Button"

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 20px 40px;
  @media (max-width: 500px) {
    padding: 20px;
  }
`

const Title = styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`

const BottomContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`

const BottomText = styled.p`
  font-size: 12px;
  font-weight: 600;
  flex: 1;
`
function CreatePost() {
  return (
    <PostContainer>
      <H4>
        <Title>What’s on your mind, @user?</Title>
      </H4>
      <TextContainer>
        <Textarea placeholder="Type your message here" rows="4" />
      </TextContainer>
      <BottomContainer>
        <BottomText>Your message will be public</BottomText>
        <Button>Send your message</Button>
      </BottomContainer>
    </PostContainer>
  )
}

export default CreatePost
