import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="d-flex justify-content-between p-5">
      <h3> {t('pages.welcomeDashboard')}</h3>
    </div>
  );
}
