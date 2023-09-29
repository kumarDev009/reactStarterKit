import { useTranslation } from 'react-i18next';
import { Row } from 'antd';

import Content from 'components/Content';
import Title from 'components/Title';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <Row>
      <Content>
        <Title>{t('pages.welcomeDashboard')}</Title>
      </Content>
    </Row>
  );
}
