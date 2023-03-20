import '../styles/Home.css';
import binance from '../images/binance.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-content">
                <div className="category">
                    <h3>Categorias</h3>
                    <ul>
                        <li><NavLink activeClassName="actived" to="/winners">Ganadores</NavLink></li>
                        <li><NavLink activeClassName="actived" to="/refunds">Reembolsos</NavLink></li>
                        <li><NavLink activeClassName="actived" to="/instructions">Instrucciones</NavLink></li>
                        <li><NavLink activeClassName="actived" to="/lottery">Historico de sorteo</NavLink></li>
                        <li><NavLink activeClassName="actived" to="/sports">Deportes</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <div className="content_banner">
                        <img src={binance} alt="imagen" />
                    </div>
                    <div className="content_text">
                        <h3>Lorem Ipso</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non incidunt consequatur at facilis aut. Aspernatur animi maxime, iusto consequatur quibusdam, cum distinctio rerum itaque nulla cumque ullam dolorem, inventore sit?
                        Officia numquam recusandae minima maiores dignissimos exercitationem repellendus hic itaque eos, repellat optio quibusdam quis illo ex praesentium distinctio debitis illum dolores. Quod eum laudantium consequuntur. Eaque facere dolores doloremque?
                        Cumque suscipit beatae praesentium ab, quasi et magnam aut at excepturi ullam laudantium rerum, modi nostrum laborum dolore. Similique ullam autem quia voluptatum ipsam blanditiis numquam laudantium doloremque repudiandae harum.
                        Quo dicta autem perferendis ullam quibusdam nostrum rem, soluta quas vero explicabo dolores itaque corrupti suscipit facilis pariatur aliquid, assumenda alias hic exercitationem id inventore accusantium totam. Excepturi, non id?
                        Aspernatur, fuga labore qui exercitationem dolorum veritatis repudiandae nulla tempore ab et minus ex. Facere quia nulla quidem iusto quas impedit incidunt adipisci qui, harum quo ea rem voluptate? Tempore!</p>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default Home;