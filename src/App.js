import './App.css';
import Block from './components/Block';
import Home from './components/Home';
import article_preview from './components/images/article-preview.jpg';
import base_apparel from './components/images/base-apparel.jpg';
import faq_accordion from './components/images/faq-accordion.jpg';
import four_card_feature from './components/images/four-card-feature.jpg';
import huddle_landing from './components/images/huddle-landing-page.jpg';
import interactive_rating from './components/images/interactive-rating.jpg';
import intro_component_signup from './components/images/intro-component-with-signup.jpg';
import news_home_page from './components/images/news-home-page.jpg';
import order_summary from './components/images/order-summary.jpg';
import ping from './components/images/Ping.jpg';
import social_proof from './components/images/social-proof.jpg';


function App() {

  return (
    <div className='main'>
      <div className='projects'>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/article-preview-component-master/' image = {article_preview}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/base-apparel-coming-soon-master' image = {base_apparel} />
        <Block link = 'https://aadhithya-css.github.io/Web-pages/faq-accordion-card-main/' image = {faq_accordion}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/four-card-feature-section-master/' image = {four_card_feature}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/huddle-landing-page-with-single-introductory-section-master/' image = {huddle_landing}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/interactive-rating-component-main/' image = {interactive_rating}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/intro-component-with-signup-form-master/' image = {intro_component_signup}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/news-homepage-main/' image = {news_home_page}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/order-summary-component-main/' image = {order_summary}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/ping-coming-soon-page-master/' image = {ping}/>
        <Block link = 'https://aadhithya-css.github.io/Web-pages/social-proof/' image = {social_proof}/>
      </div>
    </div>
  );
}

export default App;
