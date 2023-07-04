import { styled } from "styled-components";

const LoginBox = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }
    >section{
        display: flex;
        margin:20px 0;
        font-size: 18px;
        font-weight: 300;
        >input {
            border-radius: 20px;
            border: none;
            background-color: #F3F6FB;
            padding: 17px;
            color : var(  --SignUpCheck)
        }
    }
    .namebar {
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 400;
            padding: 0 0 0 20px;
        }
    }
    .psbar {
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 500;
            padding: 0 0 0 7px;
        }
    }
    .namepsbar{
        position: relative;
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 500;
            width: 80px;
            line-height: 50px;
        }
        >input{
                width: 425px;
                height: 50px;
            }
        >h5 {
            font-size: 9px;
            color: #AFB9CA;
            font-weight: 400;
            position: absolute;
            top: 20px;
            right: 17px;
        }
        }
    .signbutton {
        display: flex;
        >button{
            width: 420px;
            height: 52px;
            margin-left: 80px;
            border-radius: 9px;
            border: 1px solid #7063EC;
            background-color: #7063EC;
            font-size: var(--font20);
            font-weight: bold;
            color: var( --SignUpButton);
            cursor: pointer;
        }
    }
    .already {
        width: 420px;
        display: flex;
        justify-content: space-between;
        float: right;
        margin-left: 80px;
        >nav{
            >img{
            width: 40px;
            height: 40px;
            margin-right: 50px;
            cursor: pointer;
            }
        }
        .linkcorr{
            text-align: right;
            display: flex;
            flex-direction: column;
            .findac{
            text-decoration: none;
            background: none;
            border: none;
            text-decoration: none;
            font-size: 11px;
            color: var(--SignUpCheck);
            font-weight: 500;
            margin-bottom: 10px;
            }
            .gosignup{
            text-decoration: none;
            background: none;
            border: none;
            text-decoration: none;
            font-size: 11px;
            color: var(--SignUpCheck);
            font-weight: 500;
            display: flex;
            >h5{
            text-decoration: none;
            background: none;
            border: none;
            text-decoration: none;
            font-size: 11px;
            margin-left: 5px;
            color: var(--SignUpCheck);
            cursor: pointer;
            font-weight: bold;
            }
            }
        }
    }

`


export default LoginBox;