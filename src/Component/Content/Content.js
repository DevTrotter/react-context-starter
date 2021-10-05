import { useContext } from 'react'
import { BtnToggle } from '../BtnToggle/BtnToggle'
import StyledContent from './StyledContent'
import { ThemeContext } from '../../Context/ThemeContext'

export const Content = () => {

    const { theme } = useContext(ThemeContext)
    
    return (
        <StyledContent>
            <BtnToggle/>
            <h1>Sint ullamco incididunt irure mollit ea ea cupidatat velit sit quis cillum.</h1>
            <p className='content-txt'>
                Sit id commodo velit nulla consectetur quis adipisicing nostrud velit excepteur consectetur duis. 
                Laborum amet cupidatat commodo aute. Minim esse anim aute ea mollit pariatur nulla culpa laboris Lorem eu sint commodo. 
                Commodo culpa commodo mollit est ipsum aute sunt proident amet consectetur sunt officia. Aliqua excepteur veniam aute amet esse minim.
                Anim esse aute adipisicing do. Duis quis amet fugiat tempor esse duis. Eiusmod nostrud non qui dolore voluptate.
                Consectetur labore voluptate amet Lorem mollit eu officia et ipsum laborum duis quis et.
                Do id laboris elit aliqua esse ea ullamco dolor. Pariatur aliqua aliqua tempor esse ut et velit proident. Ipsum magna veniam veniam do eu.
                Excepteur incididunt occaecat dolor irure est incididunt exercitation ad aute. Amet nisi esse cupidatat 
                duis minim deserunt id dolore sunt id eu mollit nisi. Aliquip sunt velit Lorem adipisicing. Id aliquip minim esse cillum non exercitation fugiat eiusmod in. 
                Qui laboris non sint id ut sit amet incididunt officia id aliqua. Consectetur Lorem eiusmod laborum eu exercitation minim Lorem ad occaecat ullamco aute magna.
                Nulla anim eiusmod esse consectetur excepteur do enim officia adipisicing ullamco id aliqua. Commodo id esse adipisicing magna pariatur. Exercitation ex Lorem adipisicing duis anim consectetur.
            </p>
        </StyledContent>
    )
}
