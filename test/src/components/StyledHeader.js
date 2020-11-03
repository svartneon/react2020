import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: rgb(171, 236, 236);
    height: 100px;
    font-size: 20px;  
    text-align: center;
    padding-top: 60px;
    color: rgb(83, 99, 99);
    & > div{
        position: absolute;
        top: 8px;
        right: 16px;
    }
    & > div > img{
        width: 30px;
        padding: 5px;
    }
`
export default StyledHeader;