import propTypes from 'prop-types'

const getResult = (a,b) => {
    return a+b;
}

export const App = ({title})=>{

    return (
        <>
            <h1>{title}</h1>
            <p>Parrafo en un fragmento</p>
        </>
    );
}

App.propTypes ={
    title : propTypes.string.isRequired
}

App.defaultProps = {
    title:'No hay título'
}