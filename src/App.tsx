import {useCallback, useEffect, useState} from 'react';
import {
  TREATMENT_CATEGORIES,
  TREATMENTS,
  TreatmentCategoryId,
} from './data/clinicData';
import {findTreatmentBySlug, getRouteMeta} from './utils/aestheticsLogic';
import {Layout} from './components/Layout';
import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {TreatmentsPage} from './pages/TreatmentsPage';
import {TreatmentDetailPage} from './pages/TreatmentDetailPage';
import {ReviewsPage} from './pages/ReviewsPage';
import {PriceGuidePage} from './pages/PriceGuidePage';
import {ContactPage} from './pages/ContactPage';
import {LegalPage} from './pages/LegalPage';

function getCurrentLocationState() {
  if (typeof window === 'undefined') {
    return {pathname: '/', search: ''};
  }
  return {
    pathname: window.location.pathname || '/',
    search: window.location.search || '',
  };
}

export default function App() {
  const [locationState, setLocationState] = useState(getCurrentLocationState);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    window.history.pushState({}, '', `${url.pathname}${url.search}`);
    setLocationState({pathname: url.pathname, search: url.search});
    window.scrollTo({top: 0, behavior: 'auto'});
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setLocationState(getCurrentLocationState());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = getRouteMeta(locationState.pathname, TREATMENTS);
    document.title = meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }
  }, [locationState.pathname]);

  const {pathname, search} = locationState;
  const cleanPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/';

  const renderPage = () => {
    if (cleanPath === '/' || cleanPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    if (cleanPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (cleanPath === '/treatments') {
      const params = new URLSearchParams(search);
      const rawCat = params.get('category');
      const isValidCategory = TREATMENT_CATEGORIES.some((c) => c.id === rawCat);
      const initialCategory: TreatmentCategoryId | 'all' = isValidCategory
        ? (rawCat as TreatmentCategoryId)
        : 'all';
      return (
        <TreatmentsPage
          initialCategory={initialCategory}
          onNavigate={navigate}
        />
      );
    }

    if (cleanPath.startsWith('/treatments/')) {
      const slug = cleanPath.replace('/treatments/', '');
      const treatment = findTreatmentBySlug(TREATMENTS, slug);
      if (treatment) {
        return (
          <TreatmentDetailPage treatment={treatment} onNavigate={navigate} />
        );
      }
      return <TreatmentsPage onNavigate={navigate} />;
    }

    if (cleanPath === '/reviews') {
      return <ReviewsPage onNavigate={navigate} />;
    }

    if (cleanPath === '/price-guide') {
      return <PriceGuidePage onNavigate={navigate} />;
    }

    if (cleanPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (cleanPath === '/privacy-and-terms') {
      return <LegalPage onNavigate={navigate} />;
    }

    return <HomePage onNavigate={navigate} />;
  };

  return (
    <Layout currentPath={cleanPath} onNavigate={navigate}>
      {renderPage()}
    </Layout>
  );
}
