import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div id="footer" className="">
    <div className="white">
        <div className="body_box">
            <div className="newsletter col4" data-amp-remove="1">
                <form method="post" id="form_register_newsletter" action="/es/subscribe_newsletter">
                    <input type="hidden" name="src" value="newsletter"/>
                    <input type="hidden" name="callback" value=""/>
                        <p className="title2">Apúntate a la newsletter para recibir las novedades</p>
                    <input rel="1" id="register_input_footer" required="required" className="required email" type="email" name="email" autocomplete="email" placeholder="Dirección e-mail"/>
                    <span id="register_newsletter" className="send-newsletter">
                        <span className="ico-newsletter">→</span>
                    </span>
                    <label id="privacy_label" className="region_required">
                        <input id="privacy" type="checkbox" name="privacy" required_check="required_check"/>
                                    Acepto que mi email se procese según la <a target="_blank" href="/es/info/privacy">política de privacidad</a>.
                        <p className="error">Este campo es obligatorio</p>
                    </label>
                </form>
            </div>
            <div className="company col">
                <p className="title3">Empresa</p>
                <ul>
                    <li><a href="/es/info/aboutus">Acerca de nosotros</a></li>
                    <li><a href="/es/info/como-funciona">Cómo funciona</a></li>
                    <li><a href="/es/info/ajuste-perfecto/">Garantía de ajuste perfecto</a></li>
                    <li><a href="/es/blog/" className="blog" target="_blank">Hockerty Blog</a></li>
                </ul>
            </div>
            <div className="company col">
                <p className="title3">Soporte</p>
                <ul>
                    <li><a href="/es/info/contact">Contáctanos</a></li>
                    <li><a href="/es/coleccion-de-tejidos/">Pide tejidos de muestra</a></li>					
                    <li><a href="/es/customer/orders" rel="nofollow">Seguimiento de envío</a></li>
                    <li><a href="/es/info">FAQs</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}
