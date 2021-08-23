import initialScreen from './components/initialScreen';
import domEvents from './helpers/events';
import '../styles/main.scss';

const init = () => {
  initialScreen();
  domEvents();
};

init();
