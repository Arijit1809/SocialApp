import React, {useState} from 'react'
import styled from "styled-components"
import {AntDesign} from '@expo/vector-icons'
import Text from '../components/Text'

const SignUpScreen = ({navigation}) => {

    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]= useState()
    const [loading,setLoading]=useState(false)

    return (
        <Container>
            <Main>
                <Text title semi center>SignUp to get Started</Text>
            </Main>

            <ProfilePhotoContainer>
                <DefaultPfp>
                    <AntDesign name="plus"size={24} color = "#ffffff"/>
                </DefaultPfp>
            </ProfilePhotoContainer>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="email" 
                        autoCorrect={false} 
                        autoFocus={true} 
                        onChangeText = {(username)=>setUsername(username.trim())}
                        value={username} 
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Email</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="email" 
                        autoCorrect={false}
                        keyboardType="email-adress"
                        onChangeText = {(email)=>setEmail(email.trim())}
                        value={email} 
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField 
                        autoCapitalize="none" 
                        autoCompleteType="password" 
                        autoCorrect={false}  
                        secureTextEntry={true}
                        onChangeText = {(password)=>setPassword(password.trim())}
                        value={password} 

                    />
                </AuthContainer>
            </Auth>

            <SignUpContainer>
                {loading?(
                    <Loading/>
                ):(
                    <Text bold center color="#ffffff">
                        Sign Up
                    </Text>
                )}
                
            </SignUpContainer>

            <SignIn onPress={()=>navigation.navigate("SignIn")}>
                <Text small center>Already have an account? <Text bold color="#8022d9">SignIn</Text></Text>
            </SignIn>

            <StatusBar barStyle="light-content"/>
        </Container>
    )
}

const Container = styled.View`
    flex:1; 
`;

const Main = styled.View`
    margin-top:160px;
`;

const ProfilePhotoContainer = styled.View `
    background-color:#e1e2e6;
    width:80px;
    height:80px;
    border-radius:40px;
    align-self:center;
    margin-top:40px;
    overflow:hidden;
`;

const DefaultPfp = styled.View `
    align-items: center;
    justify-content:center;
    flex:1;
`;

const Auth = styled.View `
    margin: 60px 32px 32px;

`;

const AuthContainer = styled.View `
    margin-bottom:50px;
`;

const AuthTitle = styled(Text) `
    color: #8e93a1;
    font-size:12px;
    text-transform : uppercase;
    font-weight:300;
`;

const AuthField = styled.TextInput `
    border-bottom-color:#8e93a1;
    border-bottom-width:0.5px;
    height:48px;
`;

const SignUpContainer = styled.TouchableOpacity `
    margin: 0 32px;
    height:48px;
    align-items:center;
    justify-content:center;
    background-color:#8022d9;
    border-radius:6px;
`;

const SignIn = styled.TouchableOpacity `
    margin-top:16px;
`;

const Loading = styled.ActivityIndicator.attrs((props)=>({
    color:"#ffffff",
    size:"small",
}))``;

const StatusBar = styled.StatusBar``;

export default SignUpScreen