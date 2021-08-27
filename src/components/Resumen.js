import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primeraMayuscula } from '../Helper';
// import Resultado from './Resultado';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ( {datos} ) => {
    
    //extraer datos
    const{marca, year, plan} = datos;

    //validar los datos
    if(marca === '' || year === '' || plan === '') return null;
    
    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca:  {primeraMayuscula(marca)} </li>
                <li>Plan:  {primeraMayuscula(plan)} </li>
                <li>Año del auto:  {year} </li>
            </ul>
        </ContenedorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;