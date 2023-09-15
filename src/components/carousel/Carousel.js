import React, { useRef, useEffect} from 'react'
import './Carousel.css'
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom';
export const Carousel = () => {
    const videoRef = useRef();
    useEffect(() =>{
        videoRef.current.play();
    }, []);
    return (
        <div className='Body'>
            <div className="designer">
                <div className="title_content">
                    <p className="title">Tecnología para un ajuste perfecto</p>
                    <div id="designer_desktop">
                        <div className="desktop" data-target="designer_desktop" id="">
                            <div className="text">Cuando compras un ordenador en una tienda física, hay varios detalles que no explican incluso puede que algunos componentes no sean los que pides, por eso en N-EX con nuestro avanzado algoritmo interactivo nos aseguramos de que tu ordenador este armado con los componentes que desees.</div>
                            <div className="cta_row">
                                <Link className="cta" to="/Equipo">Comenzar</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <video
                     ref={videoRef}
                    className="b-lazy desktop b-loaded" 
                    autoPlay loop muted playsInline data-amp-remove="1">
                        <source type="video/mp4" src="./Video.mp4" />
                        <source type="video/mp4" src="./Video.mp4" />
                        <img data-src="" className="blazy" alt="" />
                    </video>
                    <video
                    className="b-lazy mobile" 
                    autoPlay 
                    loop
                    muted
                    playsInline
                    data-width="205" 
                    data-height="410" 
                    layout="responsive">
                        <source data-src="" type="video/mp4" />
                        <source data-src="" type="video/mp4" />
                        <img data-src="" data-width="205" data-height="410" className="blazy" alt="" />
                    </video>
                </div>
                <div className="clone_desktop" data-target="designer_desktop">
                    <div className="text">Cuando compras un ordenador en una tienda física, hay varios detalles que no explican incluso puede que algunos componentes no sean los que pides, por eso en N-EX con nuestro avanzado algoritmo interactivo nos aseguramos de que tu ordenador este armado con los componentes que desees.</div>
                    <div className="cta_row">
                        <Link className="cta" to="/Equipo">Comenzar</Link>
                    </div>
                </div>
            </div>
            <div className="big_features">
                <div className="feature planet">
                    <div className="image1">
                        <img width="375" height="419" className="b-lazy1 b-loaded" alt="" src="./proximamente.png" />
                    </div>
                    <div className="text1">
                        <p className="title1">¿Problemas con tu equipo?</p>
                        <p className="intro">Cuando hay fallas en tu equipo lo más recomendado es ir a un profesional para resolver la falla del equipo. En N-EX proporcionamos al cliente una base de datos de todas las fallas que puede haber en tu equipo asi como la posible solucion y recomendacion.</p>
                        <p className="cta_row"><a href="/es/info/nuestros-valores#sustainability" className="cta">Echa un vistazo</a></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        );
}
export default Carousel;