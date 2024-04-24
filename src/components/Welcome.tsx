import verdugo from '../images/verdugo.png';
import '../css/welcomeComponent.css';

export default function Welcome(){
    
    return(
        <>
            <div className="wraper">
                <h1>Welcome to hangman</h1>
                <h2>Classical game</h2>
                <img src={verdugo} alt='Verdugo'width={200} height={200}/>
            </div>
        </>
    );
}