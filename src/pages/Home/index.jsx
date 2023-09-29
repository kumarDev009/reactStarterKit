import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-between p-5">
      <h3>{t('pages.welcomeHome')}</h3>
    </div>
  );
};

export default Home;
