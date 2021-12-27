import React, { Fragment, useState } from 'react'
import { Text, Input, Button, Image } from '../elements'
import styled from 'styled-components'

const Signup = () => {
  const [emailButtonColor, setEmailButtonColor] = useState('white')
  const [signupButtonColor, setSignupButtonColor] = useState('#35c4ef')
  return (
    <Fragment>
      <Container>
        <Header
          onClick={() => {
            window.alert('메인 페이지로 이동')
          }}
        >
          <Image
            width="50px"
            height="50px"
            src="https://image.rocketpunch.com/company/2425/bucketplace_logo_1520495612.png?s=400x400&t=inside"
            borderRadius="10px"
          />
          <Text weight="bold" size="24px" margin="0px 8px">
            오늘의집
          </Text>
        </Header>
        <SignupContainer>
          <div style={{}}>
            <Text weight="bold" size="20px" margin="8px 0px">
              회원가입
            </Text>
          </div>
          <SocialLogin>
            <Text size="12px" margin="8px 0px">
              SNS계정으로 간편하게 회원가입
            </Text>
            <SocialLoginContainer>
              <SocialLoginImage>
                <a href="https://www.facebook.com">
                  <Image
                    width="55px"
                    height="55px"
                    borderRadius="55px"
                    src="https://blog.kakaocdn.net/dn/lhU48/btqRoQfJhbZ/9E6G4WxknrC7MPv2gV1DSk/img.jpg"
                  />
                </a>
              </SocialLoginImage>
              <SocialLoginImage>
                <a href="https://www.kakao.com">
                  <Image
                    width="55px"
                    height="55px"
                    borderRadius="55px"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/2500px-KakaoTalk_logo.svg.png"
                  />
                </a>
              </SocialLoginImage>
              <SocialLoginImage>
                <a href="https://www.naver.com">
                  <Image
                    width="55px"
                    height="55px"
                    borderRadius="55px"
                    src="https://play-lh.googleusercontent.com/jYtnK__ibJh9emODIgTyjZdbKym1iAj4RfoVhQZcfbG-DuTSHR5moHVx9CQnqg1yoco9"
                  />
                </a>
              </SocialLoginImage>
            </SocialLoginContainer>
          </SocialLogin>
          <EmailContainer>
            <Text weight="bold" size="18px" margin="8px 0px">
              이메일
            </Text>
            <EmailInput>
              <Input placeholder="이메일" />
              <Text weight="bold" margin="0px 2px" size="20px" color="#cccccc">
                @
              </Text>
              <SelectBar>
                <option selected>선택해주세요</option>
                <option value="1">naver.com</option>
                <option value="2">hanmail.net</option>
                <option value="3">daum.net</option>
                <option value="4">gmail.com</option>
                <option value="5">nate.com</option>
                <option value="6">hotmail.com</option>
                <option value="7">outlook.com</option>
                <option value="8">icloud.com</option>
                <option value="direct">직접입력</option>
              </SelectBar>
            </EmailInput>
            <Button
              bgColor={emailButtonColor}
              onMouseOver={() => {
                setEmailButtonColor('#e6f4ff')
              }}
              onMouseLeave={() => {
                setEmailButtonColor('white')
              }}
            >
              <Text weight="bold" size="20px" color="#35c4ef" margin="14px">
                이메일 인증하기
              </Text>
            </Button>
          </EmailContainer>
          <PasswordContainer>
            <Text weight="bold" size="18px">
              비밀번호
            </Text>
            <Password>
              <Text margin="8px 0px">
                영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
              </Text>
              <Input placeholder="비밀번호" />
            </Password>
          </PasswordContainer>
          <PasswordCheckContainer>
            <Text weight="bold" size="18px">
              비밀번호 확인
            </Text>
            <PasswordCheck>
              <Input placeholder="비밀번호 확인" />
            </PasswordCheck>
          </PasswordCheckContainer>
          <NicknameContainer>
            <Text weight="bold" size="18px">
              닉네임
            </Text>
            <Password>
              <Text margin="8px 0px">
                다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
              </Text>
              <Input placeholder="별명 (2~15자)" />
            </Password>
          </NicknameContainer>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: '8px',
            }}
          >
            <Button
              bgColor={signupButtonColor}
              onMouseOver={() => {
                setSignupButtonColor('#74a9d4')
              }}
              onMouseLeave={() => {
                setSignupButtonColor('#35c4ef')
              }}
            >
              <Text weight="bold" size="20px" color="white" margin="14px">
                회원가입하기
              </Text>
            </Button>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text weight="400" margin="20px 0px">
                이미 아이디가 있으신가요?
              </Text>
              <Text
                weight="bold"
                margin="0px 8px"
                underline
                onClick={() => {
                  window.alert('로그인 페이지로 이동')
                }}
              >
                로그인
              </Text>
            </div>
          </div>
        </SignupContainer>
      </Container>
    </Fragment>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 120vh;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 40px;
  margin-top: 32px;
`
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30%;
  height: 100%;
  padding: 4px;
`
const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #dddddd;
`
const SocialLoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`
const SocialLoginImage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 55px;
  margin: 0px 16px;
`
const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 0px;
`
const EmailInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 12px;
`
const SelectBar = styled.select`
  padding: 14px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
`
const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 0px;
`
const PasswordCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 0px;
`
const Password = styled.div`
  width: 100%;
`
const PasswordCheck = styled.div`
  width: 100%;
  margin: 8px 0px;
`
const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 0px;
`
export default Signup
