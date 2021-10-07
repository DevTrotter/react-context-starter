import styled from "styled-components";

const StyledContent = styled.div`
    padding: 50px 10vw;

    .modal-background{
        position: absolute;
        top: 0px;
        left: 0;
        z-index: -1;
        background-color: ${({colory}) => colory ? 'black' : 'white'};
        width: 100vw;
        height: 100vh;
    }

    .content-txt{
        text-align: justify;
    }

    h1, .content-txt{
        color: ${({colory}) => colory ? 'white' : 'black'};
    }
`

export default StyledContent