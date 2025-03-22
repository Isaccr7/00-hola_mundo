import './App.css';
import { TwitterFollowCard } from './TwitterFolloowCrad';

export function App (){
    return (
        <section className='App'>
        
        <TwitterFollowCard   userName='midudev' name='midudev' />
        <TwitterFollowCard  userName='pheralb' name='midudev' />
        <TwitterFollowCard  userName='Elon Musk' name='Elon Musk' />
        </section>
    );
}