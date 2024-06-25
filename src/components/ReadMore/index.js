// Write your code here
import {useState} from 'react'
import {
  ReadMoreAppContainer,
  TopContainer,
  HookContainer,
  HookHeading,
  HookPara,
  ImgHook,
  HookDesc,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const [isReadMore, setReadMore] = useState(false)
  const {reactHooksDescription} = props
  const reactLessDesc = reactHooksDescription.slice(0, 170)
  const onClickUpdateContents = () => {
    setReadMore(prev => !prev)
  }
  console.log(reactLessDesc)
  return (
    <ReadMoreAppContainer>
      <TopContainer>
        <HookHeading>React Hooks</HookHeading>
        <HookPara>Hooks are a new addition to React</HookPara>
      </TopContainer>
      <HookContainer>
        <ImgHook
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <HookDesc>
          {isReadMore ? reactHooksDescription : reactLessDesc}
        </HookDesc>
        <ReadButton type="button" onClick={onClickUpdateContents}>
          {isReadMore ? 'Read Less' : 'Read More'}
        </ReadButton>
      </HookContainer>
    </ReadMoreAppContainer>
  )
}

export default ReadMore
