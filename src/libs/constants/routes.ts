import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Auctions from '../../pages/Auctions';
import CuratedPicks from '../../pages/CuratedPicks';
import ResidentArtists from '../../pages/ResidentArtists';
import TheCollection from '../../pages/TheCollection';
import ArtworkDetails from '../../pages/ArtworkDetails';

type TRoute = {
  path: string;
  element: () => JSX.Element;
  text: string;
  isNavItem: boolean;
  isFooterItem: boolean;
};

type TRouteItem = Record<string, TRoute>;

const ROUTES: TRouteItem = {
  Home: {
    path: '',
    element: Home,
    text: '',
    isNavItem: false,
    isFooterItem: false,
  },
  About: {
    path: '/about',
    element: About,
    text: 'About',
    isNavItem: false,
    isFooterItem: true,
  },
  Contact: {
    path: '/contact',
    element: Contact,
    text: 'Contact',
    isNavItem: false,
    isFooterItem: true,
  },
  Auctions: {
    path: '/auctions',
    element: Auctions,
    text: 'Auctions',
    isNavItem: true,
    isFooterItem: false,
  },
  CuratedPicks: {
    path: '/curatedpicks',
    element: CuratedPicks,
    text: 'Curated Picks',
    isNavItem: true,
    isFooterItem: false,
  },
  ResidentArtists: {
    path: '/residentartists',
    element: ResidentArtists,
    text: 'Resident Artists',
    isNavItem: true,
    isFooterItem: false,
  },
  TheCollection: {
    path: '/collection',
    element: TheCollection,
    text: 'The Collection',
    isNavItem: true,
    isFooterItem: true,
  },
  ArtworkDetails: {
    path: '/collection/:id',
    element: ArtworkDetails,
    text: '',
    isNavItem: false,
    isFooterItem: false,
  },
};

export default ROUTES;
