import React from "react";
import {Outlet, useLocation} from "react-router-dom";
import {useState} from "react";
import {   ButtonIcon} from './AppStyles';
import Mode from "./Mode";
import styled from "styled-components";
import iconCSS from './assets/images/icon-css.svg';
import iconHTML from './assets/images/icon-html.svg';
import iconJS from './assets/images/icon-js.svg';
import iconAccess from './assets/images/icon-accessibility.svg';



const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const SubjectContainer = styled.div`
    position: absolute;
    display: flex;
    width: 80%;
    height: 7%;
    left: 9.7%;
    top: 8.6%;
    border-style: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Subject = styled.div`
    display: flex;
    width: 29%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    gap: 9.5%;
`;
export const SubjectText = styled.span`
    font-family: "Rubik Medium", serif;
    font-size: 28px;
    color: #4d5869;
`;

export const SubjectIcon = styled.img<{bgColor: string}>`
  background-color: ${props => props.bgColor};
  height: 100%;
  width: 16%;
  border-radius: 8px;
  //margin-left: 4%;
  //margin-right: 8%;
`;





const Layout = () => {
    // const[tile, setTitle] = useState("");
    const location = useLocation();

    const renderQuizSubject = () => {
        // const icon = () => {
        //     return(
        //         <SubjectIcon src={content.imgSrc} bgColor={content.color} />
        //     );
        // };
        switch (location.pathname){
            case "/pages/HTMLQuiz":
                return {title: "HTML", imgSrc:iconHTML, color:"#fff1e9",
                    icon: function subIcon()  {return(
                        <SubjectIcon src={content.imgSrc} bgColor={content.color} />
            )}
                };
            case "/pages/CSSQuiz":
                return {title: "CSS", imgSrc:iconCSS, color:"#e0fdef",
                    icon: function subIcon()  {return(
                        <SubjectIcon src={content.imgSrc} bgColor={content.color} />
                    )}
                };
            case "/pages/JavascriptQuiz":
                return {title: "JavaScript", imgSrc:iconJS, color:"#ebf0ff",
                    icon: function subIcon()  {return(
                        <SubjectIcon src={content.imgSrc} bgColor={content.color} />
                    )}
                };
            case "/pages/AccessibilityQuiz":
                return {title: "Accessibility", imgSrc:iconAccess, color:"#f6e7ff",
                    icon: function subIcon()  {return(
                        <SubjectIcon src={content.imgSrc} bgColor={content.color} />
                    )}
                };
            default:
                return {title: "",  color: "", icon: function empty()  {return(
                        <></>
                    );
                    }};
        }
    };

    const content = renderQuizSubject();
    return (
        <Container>
            <SubjectContainer>
                <Subject>
                    <>
                        {content.icon()}
                        <p> <SubjectText> {content.title} </SubjectText> </p>
                    </>
                </Subject>
               <Mode/>
            </SubjectContainer>
            <Outlet/>
        </Container>
    );
}

export default Layout;