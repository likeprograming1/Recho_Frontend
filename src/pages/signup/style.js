import { styled } from "styled-components"

const SignUpBox = styled.main`
    margin: 100px auto;
    width: 500px;
    height: 500px;
    .title{
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    }
    >section{
        display: flex;
        margin: 20px 0;
        font-size: 18px;
        font-weight: 300;
        >input {
            border-radius: 20px;
            border: none;
            background-color: #f3f6fb;
            padding: 17px;
            color : var(  --SignUpCheck)
        }
    }
    .emailbar {
        position: relative;
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 500;
            width: 103px;
            height: 50px;
            line-height: 50px;
            padding-left: 22px;
        }
        >:nth-child(2){
            width: 305px;
            height: 50px;
            margin-right: 10px;
        }
        >:nth-child(3){
            >input{
            width: 160px;
            height: 50px;
            border-radius: 20px;
            border: none;
            background-color: #f3f6fb;
            padding: 17px;
            }
        }
        >button{
            width: 66px;
            height: 13px;
            background: none;
            border: none;
            border-bottom: 1px solid black;
            font-size: var(--font9);
            color: var(--logSignTitleFont);
            cursor: pointer;
            position: absolute;
            top: 53px;
            right: 18px;
        }
    }
    .namebar {
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 400;
            padding: 0 0 0 35px;
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
    .nickbar {
        position: relative;
        >h4 {
            font-size: var(--font18);
            color : var(--loginTitleFont);
            font-weight: 500;
            width: 80px;
            line-height: 50px;
            padding: 0 0 0 20px;
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
    .check {
        display: flex;
        justify-content: right;
        .sercheck{
            margin-left: 10px;
            >label{
            margin-left: 10px;
            color: var(--SignUpCheck);
            font-size: var(--font12);
        }
        }
        .corcheck {
            height: 30px;
            margin-left: 10px;
            >label {
                margin-left: 10px;
                color: var(--SignUpCheck);
                font-size: var(--font12);
            }
        }
    }
    .signbutton {
        margin-left: 75px;
        display: flex;
        justify-content: space-between;
        max-width: 425px;
        >button{
            width: 195px;
            height: 52px;
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
        display: flex;
        flex-direction: column;
        float: right;
        >h6{
            float: right;
            background: none;
            border: none;
            text-decoration: none;
            font-size: 11px;
            color: #455368;
            cursor: pointer;
            font-weight: bold;
        }
        >:nth-child(2){
            margin-top: 5px;
            margin-left: 65px;
            float: right;
            background: none;
            border: none;
            text-decoration: none;
            font-size: 11px;
            color: #455368;
            cursor: pointer;
            font-weight: bold;
        }
    }

`


export default SignUpBox