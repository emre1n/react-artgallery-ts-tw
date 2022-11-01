import Home from '../../pages/Home';
import Auctions from '../../pages/Auctions';
import CuratedPicks from '../../pages/CuratedPicks';
import ResidentArtists from '../../pages/ResidentArtists';
import TheCollection from '../../pages/TheCollection';

type TRoute = {
  path: string;
  element: () => JSX.Element;
  text: string;
  isNavItem: boolean;
};

type TRouteItem = Record<string, TRoute>;

const ROUTES: TRouteItem = {
  Home: {
    path: '',
    element: Home,
    text: '',
    isNavItem: false,
  },
  Auctions: {
    path: '/auctions',
    element: Auctions,
    text: 'Auctions',
    isNavItem: true,
  },
  CuratedPicks: {
    path: '/curatedpicks',
    element: CuratedPicks,
    text: 'CuratedPicks',
    isNavItem: false,
  },
  ResidentArtists: {
    path: '/residentartists',
    element: ResidentArtists,
    text: 'ResidentArtists',
    isNavItem: true,
  },
  TheCollection: {
    path: '/thecollection',
    element: TheCollection,
    text: 'TheCollection',
    isNavItem: true,
  },
};

export default ROUTES;
