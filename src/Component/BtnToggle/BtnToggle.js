import { useContext } from 'react'
import StyledBtnToggle from './StyledBtnToggle'
import { ThemeContext } from '../../Context/ThemeContext'

export const BtnToggle = () => {
    const {theme , toggleTheme} = useContext(ThemeContext)

    return (   
        <StyledBtnToggle onClick={toggleTheme}>
            {theme ? 'NIGHT' : 'LIGHT'}
        </StyledBtnToggle>
    )
}
